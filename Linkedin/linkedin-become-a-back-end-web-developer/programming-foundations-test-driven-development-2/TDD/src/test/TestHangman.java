package test;

import static org.junit.Assert.*;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import junit.framework.TestCase;
import main.Hangman;

import org.junit.After;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

@RunWith(JUnit4.class)
public class TestHangman extends TestCase {

	private Hangman hangman;
	private Random random;
	private int requestedWordLength;

	@Before
	public void onSetup() {
		hangman = new Hangman();
		hangman.loadWords();
		random = new Random();
		requestedWordLength = random.nextInt(6) + 5;
		hangman.score = 0;
	}

	/**
	 * tests whether the hangman.countAlphabet returns the correct number of
	 * times the given alphabet appears in the given word
	 */
	@Test
	public void test_alphabetCountInAWord() {
		String word = "pizza";
		char alphabet = 'a';
		int count = hangman.countAlphabet(word, alphabet);

		assertEquals(1, count);
	}

	@Test
	public void test_lengthOfFetchedWordRandom() {
		String word = hangman.fetchWord(requestedWordLength);

		assertTrue(requestedWordLength == word.length());
	}

	@Test
	public void test_uniquenessOfFetchWord() {
		Set<String> usedWordsSet = new HashSet<String>();
		int round = 0;
		String word = null;

		while (round < 100) {
			requestedWordLength = random.nextInt(6) + 5;
			word = hangman.fetchWord(requestedWordLength);
			round++;

			assertTrue(usedWordsSet.add(word));
		}

	}

	@Test
	public void test_fetchClueBeforeAnyGuess() {
		String clue = hangman.fetchClue("pizza");
		assertEquals("-----", clue);
	}

	@Test
	public void test_fetchClueAfterCorrectGuess() {
		String clue = hangman.fetchClue("pizza");
		String newClue = hangman.fetchClue("pizza", clue, 'a');
		assertEquals("----a", newClue);
	}

	@Test
	public void test_fetchClueAfterIncorrectGuess() {
		String clue = hangman.fetchClue("pizza");
		String newClue = hangman.fetchClue("pizza", clue, 'x');
		assertEquals("-----", newClue);
	}

	@Test(expected = IllegalArgumentException.class)
	public void test_whenInvalidgGuessThenFetchClueThrowsException() {
		hangman.fetchClue("pizza", "-----", '1');
	}

	@Test
	public void test_whenInvalidgGuessThenFetchClueThrowsExceptionWithMessage() {
		try {
			hangman.fetchClue("pizza", "-----", '1');
		} catch (IllegalArgumentException e) {
			assertEquals("Invalid character", e.getMessage());
		}

	}

	@Test
	public void test_reaminingTrailBeforeAnyGuess() {
		hangman.fetchWord(requestedWordLength);
		assertEquals(Hangman.MAX_TRIAL, hangman.remainingTrials);
	}

	@Test
	public void test_reaminingTrailAfterOnGuess() {
		hangman.fetchWord(requestedWordLength);
		hangman.fetchClue("pizza", "-----", 'a');
		assertEquals(Hangman.MAX_TRIAL - 1, hangman.remainingTrials);
	}

	@Test
	public void test_scoreBeforeAnyGuess() {
		hangman.fetchWord(requestedWordLength);
		assertEquals(0, hangman.score);
	}

	@Test
	public void test_scoreAfterCorrectGuess() {
		String word = "pizza";
		hangman.fetchClue(word, "-----", 'a');
		assertEquals((int) Hangman.MAX_TRIAL / word.length(), hangman.score);
	}
	
	@Test
	public void test_scoreAfterWrongGuess() {
		String word = "pizza";
		hangman.fetchClue(word, "-----", 'x');
		assertEquals(0, hangman.score);
	}

	@After
	public void onTearDown() {
		requestedWordLength = 0;
		random = null;
		hangman = null;
	}

}
