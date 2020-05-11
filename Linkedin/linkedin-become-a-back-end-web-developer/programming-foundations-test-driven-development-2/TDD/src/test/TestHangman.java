package test;

import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import main.Hangman;

import org.junit.Test;

public class TestHangman {

	/**
	 * tests whether the hangman.countAlphabet returns the correct number of
	 * times the given alphabet appears in the given word
	 */
	@Test
	public void test_alphabetCountInAWord() {
		String word = "pizza";
		char alphabet = 'a';

		Hangman hangman = new Hangman();

		int count = hangman.countAlphabet(word, alphabet);

		assertEquals(1, count);
	}

	@Test
	public void test_lengthOfFetchedWordRandom() {

		Random random = new Random();
		int requestedWordLength = random.nextInt(6) + 5;

		Hangman hangman = new Hangman();
		hangman.loadWords();
		
		String word = hangman.fetchWord(requestedWordLength);

		assertTrue(requestedWordLength == word.length());
	}

	/**
	 * 
	 */
	@Test
	public void test_uniquenessOfFetchWord() {

		Random random = new Random();
		Hangman hangman = new Hangman();
		hangman.loadWords();
		Set<String> usedWordsSet = new HashSet<String>();
		int round = 0;
		int requestedWordLength = 0;
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
		Hangman hangman = new Hangman();
		String clue = hangman.fetchClue("pizza");
		assertEquals("-----", clue);
	}
	
	@Test 
	public void test_fetchClueAfterCorrectGuess() {
		Hangman hangman = new Hangman();
		String clue = hangman.fetchClue("pizza");
		String newClue = hangman.fetchClue("pizza", clue, 'a');
		assertEquals("----a", newClue);
	}
	
	@Test 
	public void test_fetchClueAfterIncorrectGuess() {
		Hangman hangman = new Hangman();
		String clue = hangman.fetchClue("pizza");
		String newClue = hangman.fetchClue("pizza", clue, 'x');
		assertEquals("-----", newClue);
	}

}
