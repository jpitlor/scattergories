package dev.pitlor.scattergories

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import javax.persistence.Convert
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id

@Entity
data class CategoryList(
    @Id @GeneratedValue
    var id: Int = 0,

    @Convert(converter = StringListConverter::class)
    var categories: List<String> = listOf()
)

@Repository
interface CategoryListRepository : JpaRepository<CategoryList, Int> {
}