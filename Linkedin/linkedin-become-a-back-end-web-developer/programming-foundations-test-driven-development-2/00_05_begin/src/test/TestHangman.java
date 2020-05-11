package test;

import main.Hangman;

import static org.junit.Assert.*;
import org.junit.Test;

public class TestHangman {

	@Test
	public void test_alphapetCountInWord() {
		String word = "Pizza";
		char alphabet = 'a';
		
		Hangman hangman = new Hangman();
		
		int count = hangman.countAlphapet(word, alphabet);
		
		assertEquals(1, count);
		
	}

}
