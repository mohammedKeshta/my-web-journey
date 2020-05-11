package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Random;

import org.junit.jupiter.api.Test;

import main.Hangman;

class TestHangman {

	/**tests whether the hangman.countAlphabet
	 * returns the correct number of times 
	 * the given alphabet appears in the given word
	 */
	@Test
	void test_alphabetCountInAWord() {
		String word = "pizza";
		char alphabet = 'a';
		
		Hangman hangman = new Hangman();
		
		int count = hangman.countAlphabet(word, alphabet);
		
		assertEquals(1, count);
	}

	@Test
	void test_lengthOfFetchedWord() {
		Hangman hangman = new Hangman();
		String word = hangman.fetchWord();
		
		assertTrue(word.length() == 5);
	}
	
	@Test
	void test_lengthOfFetchedWordRandom() {
		Random random = new Random();
		int requestedLength = random.nextInt(6) + 5;
		Hangman hangman = new Hangman();
		String word = hangman.fetchWord(requestedLength);
		
		assertTrue(requestedLength == word.length());
	}
	
}
