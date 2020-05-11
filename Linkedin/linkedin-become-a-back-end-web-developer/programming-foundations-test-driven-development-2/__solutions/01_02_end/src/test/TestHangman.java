package test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

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
	
	@Test
	void test_uniquenessOfFetchedWord() {
		Random random = new Random();
		int requestedLength = 0;
		Set<String> usedWordsSet = new HashSet<>();
		int round = 0;
		String word = null;
		Hangman hangman = new Hangman();
		
		while (round < 100) {
			requestedLength = random.nextInt(6) + 5;
			word = hangman.fetchWord(requestedLength);
			round++;
			assertTrue(usedWordsSet.add(word));
			
			
			
		}
	}
	
	
	
}
