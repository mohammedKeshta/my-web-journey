#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun May  5 15:14:59 2019

@author: melzanaty
"""
import media
import fresh_tomatoes


def main():

    # First Movie
    ugly_dolls = media.Movie("Ugly Dolls",
                             "An animated adventure in which the free-spirited UglyDolls confront what it means to be different, struggle with a desire to be loved, and ultimately discover who you truly are is what matters most.",
                             "http://bit.ly/2H4HvYa",
                             "https://www.youtube.com/watch?v=VzbxSpBOJ6E")
    # print(ugly_dolls.storyline)

    # Second Movie
    avengers_endgame = media.Movie("Avengers: Endgame",
                                   "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to undo Thanos' actions and restore order to the universe.",
                                   "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
                                   "https://www.youtube.com/watch?v=TcMBFSGVi1c")
    # print(avengers_endgame.storyline)
    # avengers_endgame.show_trailer()
    movies = [ugly_dolls, avengers_endgame]
    fresh_tomatoes.open_movies_page(movies)


# Driver Code
if __name__ == '__main__':

    # Calling main() function
    main()
