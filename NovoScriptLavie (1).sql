-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema LaVie
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema LaVie
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `LaVie` DEFAULT CHARACTER SET utf8 ;
USE `LaVie` ;

-- -----------------------------------------------------
-- Table `mydb`.`Psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaVie`.`Psicologos` (
  `psicologo_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` TEXT NOT NULL,
  `apresentacao` VARCHAR(200) NULL,
  PRIMARY KEY (`psicologo_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaVie`.`Pacientes` (
  `paciente_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `idade` DATE,
  PRIMARY KEY (`paciente_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `LaVie`.`Atendimentos` (
  `atendimento_id` INT NOT NULL AUTO_INCREMENT,
  `data` DATE NOT NULL,
  `observacao` VARCHAR(200) NULL,
  `Psicologos_psicologo_id` INT NOT NULL,
  `Pacientes_paciente_id` INT NOT NULL,
  PRIMARY KEY (`atendimento_id`),
  INDEX `fk_Atendimentos_Psicologos_idx` (`Psicologos_psicologo_id` ASC) VISIBLE,
  INDEX `fk_Atendimentos_Pacientes1_idx` (`Pacientes_paciente_id` ASC) VISIBLE,
  CONSTRAINT `fk_Atendimentos_Psicologos`
    FOREIGN KEY (`Psicologos_psicologo_id`)
    REFERENCES `mydb`.`Psicologos` (`psicologo_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Atendimentos_Pacientes1`
    FOREIGN KEY (`Pacientes_paciente_id`)
    REFERENCES `mydb`.`Pacientes` (`paciente_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

USE `mydb` ;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
