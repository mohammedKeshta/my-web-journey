package main;

public class Hangman {

	/**countAlphabet takes a word and an alphabet
	 * and returns the number of times the alphabet
	 * appears in the word
	 * @param word
	 * @param alphabet
	 * @return
	 */
	public int countAlphabet(String word, char alphabet) {
		int result = 0;
		
		for (char c : word.toCharArray()) {
			if (c == alphabet) result++;
		}
		return result;
	}


}
