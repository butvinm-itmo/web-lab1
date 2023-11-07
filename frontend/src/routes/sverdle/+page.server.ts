import { fail } from "@sveltejs/kit";
import { Game } from "./game";
import type { PageServerLoad, Actions } from "./$types";

export const load = (({ cookies }) => {
    const game = new Game(cookies.get("sverdle"));

    return {
        /**
         * The player's guessed words so far
         */
        guesses: game.guesses,

        /**
         * An array of strings like '__x_c' corresponding to the guesses, where 'x' means
         * an exact match, and 'c' means a close match (right letter, wrong place)
         */
        answers: game.answers,

        /**
         * The correct answer, revealed if the game is over
         */
        answer: game.answers.length >= 6 ? game.answer : null,
    };
}) satisfies PageServerLoad;
