package dev.pitlor.scattergories

import javax.persistence.AttributeConverter
import javax.persistence.Converter


@Converter
class StringListConverter : AttributeConverter<List<String>, String> {
    override fun convertToDatabaseColumn(list: List<String>): String {
        return list.joinToString()
    }

    override fun convertToEntityAttribute(string: String): List<String> {
        return string.split(", ")
    }
}