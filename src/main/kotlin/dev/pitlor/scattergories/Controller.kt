package dev.pitlor.scattergories

import dev.pitlor.gamekit_spring_boot_starter.implementations.User
import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.messaging.simp.annotation.SubscribeMapping
import org.springframework.stereotype.Controller

@Controller
class Controller(
    private val server: ScattergoriesServer,
    private val socket: SimpMessagingTemplate
) {
    fun startRound(listId: Int) {

    }

    fun submitGuesses(user: User, guesses: List<String>) {

    }
}