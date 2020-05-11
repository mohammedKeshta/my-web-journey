package main;

import java.io.BufferedReader;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

public class Hangman {

	Set<String> usedWords = new HashSet<String>();
	ArrayList<String> wordsList = new ArrayList<String>();

	/**
	 * countAlphabet takes a word and an alphabet and returns the number of
	 * times the alphabet appears in the word
	 * 
	 * @param word
	 * @param alphabet
	 * @return
	 */
	public int countAlphabet(String word, char alphabet) {
		int result = 0;

		for (char c : word.toCharArray()) {
			if (c == alphabet)
				result++;
		}
		return result;
	}

	public String fetchWord(int requestedLength) {

		for (String word : wordsList) {
			if (word.length() != requestedLength)
				continue;
			else if (usedWords.add(word))
				return word;
		}
		return null;
	}

	public void loadWords() {
		try {
			BufferedReader bufferedReader = new BufferedReader(new FileReader(
					"WordSource.txt"));
			String word = null;
			while (bufferedReader.ready()) {
				word = bufferedReader.readLine();
				wordsList.add(word);
			}
			bufferedReader.close();

		} catch (Exception e) {
			e.printStackTrace();
		}

	}

	public String fetchClue(String word) {
		StringBuilder clue = new StringBuilder();
		char[] charArray = word.toCharArray();
		for (int i = 0; i < charArray.length; i++) {
			clue.append("-");
		}
		return clue.toString();
	}

	public String fetchClue(String word, String clue, char guess) {
		StringBuilder newClue = new StringBuilder();
		char[] charArray = word.toCharArray();
		for (int i = 0; i < charArray.length; i++) {
			if (word.charAt(i) == guess && clue.charAt(i) != guess) {
				newClue.append(guess);
			} else {
				newClue.append(clue.charAt(i));
			}
		}
		return newClue.toString();
	}
}
