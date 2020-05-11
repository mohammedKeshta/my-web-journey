package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import main.Hangman;
import main.MockScoreDB;

class TestHangman {
	
	static Random random;
	static Hangman hangman;
	int requestedLength;
	
	@BeforeAll
	public static void setupClass() {
		random = new Random();
		hangman = new Hangman();
		hangman.loadWords();
	}
	
	@BeforeEach
	public void setupTest() {
		requestedLength = random.nextInt(5) + 6;
		hangman.score = 0;
	}

	/**tests countAlphabet() in Hangman
	 * Example: if the word is "pizza" and alphabet to count 
	 * is p, then count is 1, if z then 2, and if x then 0
	 */
	@Test
	void test_alphabetCountInWord() {
		String word = "pizza";
		char alphabet = 'a';
		
		int count = hangman.countAlphabet(word, alphabet);
		assertEquals(1, count);
	}

	/** tests that the fetchcWord returns a word
	 * of requestedlength where 
	 * the requestedLength can vary randomly between 5 and 10
	 */
	@Test
	void test_lengthOfFetchedWordRandom() {
		String word = hangman.fetchWord(requestedLength);
		assertEquals(requestedLength, word.length());
	}
	
	/**tests that fetchWord returns a unique word 
	 * every time across 100 rounds of
	 * of Hangman.
	 */
	@Test
	void test_uniquenessOfFetchedWord() {
		Set<String> usedwordsSet = new HashSet<>();
		int round = 0;
		while (round < 100) {
			assertTrue(usedwordsSet.add(hangman.fetchWord(random.nextInt(6) + 5)));
			round++;
		}
	}
	
	/** tests that fetchClue returns string with
	 * all dashes of same length as word passed 
	 * to fetchClue() 
	 */
	@Test
	void test_fetchClueBeforeAnyGuess() {
		String clue = hangman.fetchClue("pizza");
		assertEquals("-----", clue);
	}
	
	/** tests that fetchClue returns string with
	 * dashes replaced with correct guessed character
	 * passed to fetchClue() 
	 */
	@Test
	void test_fetchClueAfterCorrectGuess() {
		String clue = hangman.fetchClue("pizza");
		String newClue = hangman.fetchClue("pizza", clue, 'a');
		
		assertEquals("----a", newClue);
	}
	
	/** tests that fetchClue returns string with
	 * no dashes replaced with incorrect guessed character
	 * passed to fetchClue() 
	 */
	@Test
	void test_fetchClueAfterIncorrectGuess() {
		String clue = hangman.fetchClue("pizza");
		String newClue = hangman.fetchClue("pizza", clue, 'x');
		
		assertEquals("-----", newClue);
	}
	
	/**tests that fetchClue throws IllegalArgumentException
	 * when passed an invalid character
	 */
	@Test
	void test_whenInvalidGuessThenFetchClueThrowsException() {
		assertThrows(IllegalArgumentException.class, 
				() -> hangman.fetchClue("pizza", "-----", '1')
				);
	}
	
	/**tests the message in the exception thrown by fetchClue
	 * when passed an invalid character
	 */
	@Test
	void test_whenInvalidGuessThenFetchClueThrowsExceptionWithMessage() {
		Exception e = assertThrows(IllegalArgumentException.class, 
				() -> hangman.fetchClue("pizza", "-----", '1')
				);
		assertEquals("Invalid character", e.getMessage());
	}

	@Test
	void test_remainingTrialsBeforeAnyGuess() {
		hangman.fetchWord(requestedLength);
		assertEquals(Hangman.MAX_TRIALS, hangman.remainingTrials);
	}
	
	@Test
	void test_remainingTrialsAfterOneGuess() {
		hangman.fetchWord(requestedLength);
		hangman.fetchClue("pizza", "-----", 'a');
		assertEquals(Hangman.MAX_TRIALS - 1, hangman.remainingTrials);
	}
	
	@Test
	void test_scoreBeforeAnyGuess() {
		hangman.fetchWord(requestedLength);
		assertEquals(0, hangman.score);
	}
	
	@Test
	void test_scoreAfterCorrectGuess() {
		String word = "pizza";
		String clue = "-----";
		char guess = 'a';
		
		hangman.fetchClue(word, clue, guess);
		
		assertEquals((double)Hangman.MAX_TRIALS / word.length(), hangman.score);
	}
	
	@Test
	void test_scoreAfterIncorrectGuess() {
		String word = "pizza";
		String clue = "-----";
		char guess = 'x';
		
		hangman.fetchClue(word, clue, guess);
		
		assertEquals(0, hangman.score);
	}
	
	@Test
	void test_saveScoreUsingMockDB() {
		MockScoreDB mockScoreDB = mock(MockScoreDB.class);
		Hangman hangman = new Hangman(mockScoreDB);
		when(mockScoreDB.writeScoreDB("apple", 10)).thenReturn(true);
		
		assertTrue(hangman.saveWordScore("apple", 10));
		
	}
	
}








