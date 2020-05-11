package test;

import static org.junit.jupiter.api.Assertions.assertEquals;

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

}
