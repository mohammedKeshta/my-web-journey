package test;

import static org.junit.jupiter.api.Assertions.*;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

import org.junit.jupiter.api.Test;

import main.Hangman;

class TestHangman {

	/**tests countAlphabet() in Hangman
	 * Example: if the word is "pizza" and alphabet to count 
	 * is p, then count is 1, if z then 2, and if x then 0
	 */
	@Test
	void test_alphabetCountInWord() {
		String word = "pizza";
		char alphabet = 'a';
		
		Hangman hangman = new Hangman();
		
		int count = hangman.countAlphabet(word, alphabet);
		assertEquals(1, count);
	}

	/** tests that the fetchcWord returns a word
	 * of requestedlength where 
	 * the requestedLength can vary randomly between 5 and 10
	 */
	@Test
	void test_lengthOfFetchedWordRandom() {
		Random random = new Random();
		Hangman hangman = new Hangman();
		int requestedLength = random.nextInt(6) + 5;
		hangman.loadWords();
		String word = hangman.fetchWord(requestedLength);
		assertEquals(requestedLength, word.length());
	}
	
	/**tests that fetchWord returns a unique word 
	 * every time across 100 rounds of
	 * of Hangman.
	 */
	@Test
	void test_uniquenessOfFetchedWord() {
		Random random = new Random();
		Hangman hangman = new Hangman();
		
		Set<String> usedwordsSet = new HashSet<>();
		int round = 0;
		hangman.loadWords();
		while (round < 100) {
			assertTrue(usedwordsSet.add(hangman.fetchWord(random.nextInt(6) + 5)));
			round++;
		}
	}
	
	@Test
	void test_fetchClueBeforeAnyGuess() {
		Hangman hangman = new Hangman();
		
		String clue = hangman.fetchClue("pizza");
		
		assertEquals("-----", clue);
	}
	
	@Test
	void test_fetchClueAfterCorrectGuess() {
		Hangman hangman = new Hangman();
		
		String clue = hangman.fetchClue("pizza");
		
		String newClue = hangman.fetchClue("pizza", clue, 'a');
		
		assertEquals("----a", newClue);
	}
	
	@Test
	void test_fetchClueAfterIncorrectGuess() {
		Hangman hangman = new Hangman();
		
		String clue = hangman.fetchClue("pizza");
		
		String newClue = hangman.fetchClue("pizza", clue, 'x');
		
		assertEquals("-----", newClue);
	}
	
}








