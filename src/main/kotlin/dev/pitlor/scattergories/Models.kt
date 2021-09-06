package dev.pitlor.scattergories

import dev.pitlor.gamekit_spring_boot_starter.implementations.Game
import dev.pitlor.gamekit_spring_boot_starter.implementations.Player
import java.util.*

enum class GuessState { GUESS, DUPLICATE, UNIQUE }
data class Guess(val value: String, val state: GuessState)

class ScattergoriesPlayer(id: UUID, settings: MutableMap<String, Any>) : Player(id, settings) {
    val guesses = listOf<Guess>()
    var points = listOf<Int>()
}

class ScattergoriesGame(code: String, adminId: UUID) : Game<ScattergoriesPlayer>(code, adminId) {
    var round = 0
    var categories = listOf<String>()
}