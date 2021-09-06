package dev.pitlor.scattergories

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import java.util.*

@SpringBootApplication
class ScattergoriesApplication

@Configuration
class Factories {
    @Bean
    fun playerFactory(): (UUID, MutableMap<String, Any>) -> ScattergoriesPlayer {
        return ::ScattergoriesPlayer
    }

    @Bean
    fun gameFactory(): (String, UUID) -> ScattergoriesGame {
        return ::ScattergoriesGame
    }

    @Bean
    fun categoryListRepository(): CategoryListRepository {
        return CategoryListRepository
    }
}

fun main(args: Array<String>) {
    runApplication<ScattergoriesApplication>(*args)
}
