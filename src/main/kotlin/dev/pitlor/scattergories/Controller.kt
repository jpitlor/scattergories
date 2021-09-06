package dev.pitlor.scattergories

import org.springframework.messaging.simp.SimpMessagingTemplate
import org.springframework.messaging.simp.annotation.SubscribeMapping
import org.springframework.stereotype.Controller

@Controller
class Controller(
    private val server: ScattergoriesServer,
    private val socket: SimpMessagingTemplate
) {

}