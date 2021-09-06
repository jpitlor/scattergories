package dev.pitlor.scattergories

import dev.pitlor.gamekit_spring_boot_starter.implementations.Server
import dev.pitlor.gamekit_spring_boot_starter.interfaces.IGameRepository
import dev.pitlor.gamekit_spring_boot_starter.interfaces.IServer
import org.springframework.stereotype.Service
import java.util.*

@Service
class ScattergoriesServer(
    private val gameRepository: IGameRepository<ScattergoriesPlayer, ScattergoriesGame>,
    private val categoryListRepository: CategoryListRepository,
    gameFactory: (code: String, adminId: UUID) -> ScattergoriesGame,
    playerFactory: (id: UUID, settings: MutableMap<String, Any>) -> ScattergoriesPlayer
) : Server<ScattergoriesPlayer, ScattergoriesGame>(gameRepository, gameFactory, playerFactory),
    IServer<ScattergoriesPlayer, ScattergoriesGame>
{
    fun setCategoryList(gameCode: String, listId: Int) {
        val game = gameRepository.safeGetByCode(gameCode)
        game.categories = categoryListRepository.getList(listId)
    }
}