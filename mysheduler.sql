-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 09 juin 2022 à 15:54
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `mysheduler`
--

-- --------------------------------------------------------

--
-- Structure de la table `annee`
--

CREATE TABLE `annee` (
  `id_annee` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `annee`
--

INSERT INTO `annee` (`id_annee`) VALUES
(2021),
(2022);

-- --------------------------------------------------------

--
-- Structure de la table `annee_cours`
--

CREATE TABLE `annee_cours` (
  `id_annee` int(10) NOT NULL,
  `code_cours` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `annee_cours`
--

INSERT INTO `annee_cours` (`id_annee`, `code_cours`) VALUES
(2022, 'ENG1001'),
(2022, 'ENG152'),
(2022, 'ENG2144 Grp1'),
(2022, 'ENG2144 Grp2'),
(2022, 'ENG2144 Grp3'),
(2022, 'ENG3035'),
(2022, 'FRA1001'),
(2022, 'FRA152'),
(2022, 'INF112'),
(2022, 'INF122'),
(2022, 'INF142'),
(2022, 'INF152'),
(2022, 'INF2044'),
(2022, 'INF2054'),
(2022, 'INF2064'),
(2022, 'INF3015'),
(2022, 'INF3016'),
(2022, 'INF3025'),
(2022, 'INF3036'),
(2022, 'INF3046'),
(2022, 'INF3115'),
(2022, 'INF3125'),
(2022, 'INF3135'),
(2022, 'INF3176'),
(2022, 'INF3186'),
(2022, 'INF3196'),
(2022, 'INF3206'),
(2022, 'INF3226'),
(2022, 'INF3236'),
(2022, 'INF3246'),
(2022, 'INF3256'),
(2022, 'INF3266'),
(2022, 'INF3276'),
(2022, 'INF3286'),
(2022, 'INF4038'),
(2022, 'INF4048'),
(2022, 'INF4178'),
(2022, 'INF4188'),
(2022, 'INF4198'),
(2022, 'INF4208'),
(2022, 'INF4218'),
(2022, 'INF4228'),
(2022, 'INF4238'),
(2022, 'INF4248'),
(2022, 'INF4258'),
(2022, 'INF4268'),
(2022, 'INF4288'),
(2022, 'MAT112'),
(2022, 'MAT142'),
(2022, 'MAT2074'),
(2022, 'MAT2084'),
(2022, 'MAT2094'),
(2022, 'MAT2104'),
(2022, 'MAT2124'),
(2022, 'MAT2134'),
(2022, 'MAT3056'),
(2022, 'MAT3066'),
(2022, 'MAT3076'),
(2022, 'MAT3086'),
(2022, 'MAT3096'),
(2022, 'MAT3106'),
(2022, 'MAT3116'),
(2022, 'MAT3126'),
(2022, 'MAT4108'),
(2022, 'MAT4118'),
(2022, 'MAT4128'),
(2022, 'MAT4148'),
(2022, 'MAT4158'),
(2022, 'MAT4168'),
(2022, 'MAT4178'),
(2022, 'MAT4188'),
(2022, 'MAT4198'),
(2022, 'MAT4218'),
(2022, 'MAT4228'),
(2022, 'MAT4248'),
(2022, 'MAT4268'),
(2022, 'MAT4298'),
(2022, 'MAT4308'),
(2022, 'PHY112'),
(2022, 'PHY122'),
(2022, 'PHY2044'),
(2022, 'PHY2054'),
(2022, 'PPE1002'),
(2022, 'PPE112'),
(2022, 'PPE2004 Info'),
(2022, 'PPE2004 Math'),
(2022, 'PPE3006 Info'),
(2022, 'PPE3006 Math');

-- --------------------------------------------------------

--
-- Structure de la table `classe`
--

CREATE TABLE `classe` (
  `id_classe` varchar(100) NOT NULL,
  `contenance` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `classe`
--

INSERT INTO `classe` (`id_classe`, `contenance`) VALUES
('L1INFO', 600),
('L1MATH', 700),
('L2INFO', 400),
('L2MATH', 500),
('L3ALG', 100),
('L3ANA', 100),
('L3DS', 80),
('L3DS_GL_R_S', 350),
('L3GEO', 100),
('L3GL', 100),
('L3MATH', 400),
('L3PROB&STAT', 100),
('L3R', 90),
('L3S', 80),
('M1ALG', 50),
('M1ANA', 50),
('M1DS', 70),
('M1DS_GL_R_S', 300),
('M1GEO', 50),
('M1GL', 80),
('M1MATH', 250),
('M1PROB&STAT', 100),
('M1R', 80),
('M1S', 60);

-- --------------------------------------------------------

--
-- Structure de la table `classe_specialite`
--

CREATE TABLE `classe_specialite` (
  `id_classe` varchar(100) NOT NULL,
  `code_specialite` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `classe_specialite`
--

INSERT INTO `classe_specialite` (`id_classe`, `code_specialite`) VALUES
('L3ALG', 'ALG'),
('L3ANA', 'ANA'),
('L3DS', 'DS'),
('L3GEO', 'GEO'),
('L3GL', 'GL'),
('L3PROB&STAT', 'PROB&STAT'),
('L3R', 'R'),
('L3S', 'S'),
('M1ALG', 'ALG'),
('M1ANA', 'ANA'),
('M1DS', 'DS'),
('M1GEO', 'GEO'),
('M1GL', 'GL'),
('M1PROB&STAT', 'PROB&STAT'),
('M1R', 'R'),
('M1S', 'S');

-- --------------------------------------------------------

--
-- Structure de la table `cours`
--

CREATE TABLE `cours` (
  `code_cours` varchar(100) NOT NULL,
  `intitule` varchar(256) NOT NULL,
  `code_semestre` varchar(100) NOT NULL,
  `code_filiere` varchar(100) NOT NULL,
  `code_niveau` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cours`
--

INSERT INTO `cours` (`code_cours`, `intitule`, `code_semestre`, `code_filiere`, `code_niveau`) VALUES
('ENG1001', 'English for Mathématics', 'SEM2', 'MATH', 'L1'),
('ENG152 Grp1', 'English for Mathématics', 'SEM2', 'INFO', 'L1'),
('ENG152 Grp2', 'English for Mathématics', 'SEM2', 'INFO', 'L1'),
('ENG2144 Grp1', 'English for Mathematics and Computer Science II', 'SEM2', 'INFO', 'L2'),
('ENG2144 Grp2', 'English for Mathematics and Computer Science II', 'SEM2', 'INFO', 'L2'),
('ENG2144 Grp3', 'English for Mathematics and Computer Science II', 'SEM2', 'INFO', 'L2'),
('ENG3035', 'English for mathematics and computer science II', 'SEM1', 'INFO', 'L3'),
('FRA1001', 'Français pour Sciences', 'SEM2', 'MATH', 'L1'),
('FRA152', 'Français pour Science 1', 'SEM2', 'INFO', 'L1'),
('INF142', 'Introduction aux Structures de Données', 'SEM2', 'NFO', 'L1'),
('INF152', 'Introduction à l\'Informatique pour la Physique', 'SEM2', 'INFO', 'L1'),
('INF2044', 'Statistiques et Analyse de Données', 'SEM2', 'INFO', 'L2'),
('INF2054', 'Modélisation et Programmation Orientée Objet en C++ ou Java', 'SEM2', 'INFO', 'L2'),
('INF2064', 'Programmation Web', 'SEM2', 'INFO', 'L2'),
('INF3015', 'Conception et Analyse des Algorithmes', 'SEM1', 'INFO', 'L3'),
('INF3025', 'Calcul Scientifique', 'SEM1', 'INFO', 'L3'),
('INF3036', 'Bases de données', 'SEM2', 'INFO', 'L3'),
('INF3046', 'Systèmes d\'Exploitation et Réseaux III', 'SEM2', 'INFO', 'L3'),
('INF3115', 'Fouille de Données I', 'SEM1', 'INFO', 'L3'),
('INF3125', 'Analyses Statistiques', 'SEM1', 'INFO', 'L3'),
('INF3135', 'Techniques d\'Optimisation I', 'SEM1', 'INFO', 'L3'),
('INF3176', 'Techniques de Programmation Avancées', 'SEM2', 'INFO', 'L3'),
('INF3186', 'Systèmes d\'Information décisionnels', 'SEM2', 'INFO', 'L3'),
('INF3196', 'Projet I', 'SEM2', 'INFO', 'L3'),
('INF3206', 'Programmation Orientée Système', 'SEM2', 'INFO', 'L3'),
('INF3216', 'Administration & Supervision réseau', 'SEM2', 'INFO', 'L3'),
('INF3226', 'Projet I', 'SEM2', 'INFO', 'L3'),
('INF3236', 'Apprentissage Artificiel', 'SEM2', 'INFO', 'L3'),
('INF3246', 'Introduction au traitement d\'images', 'SEM2', 'INFO', 'L3'),
('INF3256', 'Projet I', 'SEM2', 'INFO', 'L3'),
('INF3266', 'Théories des codes II', 'SEM2', 'INFO', 'L3'),
('INF3276', 'Théorie des Nombres I', 'SEM2', 'INFO', 'L3'),
('INF3286', 'Projet I', 'SEM2', 'INFO', 'L3'),
('INF4038', 'Base de données distribuées', 'SEM2', 'INFO', 'M1'),
('INF4048', 'Compilation', 'SEM2', 'INFO', 'M1'),
('INF4178', 'Génie Logiciel I', 'SEM2', 'INFO', 'M1'),
('INF4188', 'Web sémantique et applications', 'SEM2', 'INFO', 'M1'),
('INF4198', 'Projet II', 'SEM2', 'INFO', 'M1'),
('INF4208', 'Réseaux mobiles et sans fils', 'SEM2', 'INFO', 'M1'),
('INF4218', 'Programmation distribuée', 'SEM2', 'INFO', 'M1'),
('INF4228', 'Projet II', 'SEM2', 'INFO', 'M1'),
('INF4238', 'Systèmes experts', 'SEM2', 'INFO', 'M1'),
('INF4248', 'Apprentissage artificiel II', 'SEM2', 'INFO', 'M1'),
('INF4258', 'Projet II', 'SEM2', 'INFO', 'M1'),
('INF4268', 'Cryptographie Asymétrique', 'SEM2', 'INFO', 'M1'),
('INF4278', 'Courbes Elliptiques 1', 'SEM2', 'INFO', 'M1'),
('INF4288', 'Projet II', 'SEM2', 'INFO', 'L3'),
('MAT112', 'Analyse 1', 'SEM2', 'INFO', 'L1'),
('MAT142', 'Algèbre 2: Eléménts d\'Algèbre Linéaire', 'SEM2', 'MATH', 'L1'),
('MAT2074', 'Calcul Intégrale sur R^n', 'SEM2', 'MATH', 'L2'),
('MAT2084', 'Calcul Scientifique', 'SEM2', 'MATH', 'L2'),
('MAT2094', 'Eléments d\'Analyse Numérique', 'SEM2', 'MATH', 'L2'),
('MAT2104', 'Introduction à la Cryptographie', 'SEM2', 'MATH', 'L2'),
('MAT2114', 'Math2114', 'SEM2', 'MATH', 'L2'),
('MAT2124', ' Analyse 2', 'SEM2', 'INFO', 'L2'),
('MAT2134', 'Statistiques 2', 'SEM2', 'MATH', 'L2'),
('MAT3056', 'Calcul Différentiel', 'SEM2', 'MATH', 'L3'),
('MAT3066', 'Variables Complexes', 'SEM2', 'MATH', 'L3'),
('MAT3076', 'Théorie des Ensembles et Algèbre Commutative et effective', 'SEM2', 'MATH', 'L3'),
('MAT3086', 'Équations différentielles ordinaires', 'SEM2', 'MATH', 'L3'),
('MAT3096', 'Probabilités II', 'SEM2', 'MATH', 'L3'),
('MAT3106', 'Statistique Mathématique', 'SEM2', 'MATH', 'L3'),
('MAT3116', 'Introduction à la Géométrie différentielle', 'SEM2', 'MATH', 'L3'),
('MAT3126', 'Analyse Numérique', 'SEM2', 'MATH', 'L3'),
('PHY112', 'Electrocinétique et magnétostatique', 'SEM2', 'MATH', 'L1'),
('PHY122', 'Mécanique du point', 'SEM2', 'MATH', 'L1'),
('PHY2044', 'Introduction à la Physique Quantique', 'SEM2', 'MATH', 'L2'),
('PHY2054', 'Thermodynamique', 'SEM2', 'MATH', 'L2'),
('PPE1002', 'Projet Personnel Etudiant I', 'SEM2', 'MATH', 'L1'),
('PPE112', 'Projet Personnel Etudiant', 'SEM2', 'INFO', 'L1'),
('PPE2004 Info', 'Projet Personnel de l\'Etudiant II', 'SEM2', 'INFO', 'L2'),
('PPE2004 Math', 'Projet Personnel Etudiant II', 'SEM2', 'MATH', 'L2'),
('PPE3006 Info', 'Projet Personnel de l\'Etudiant III', 'SEM2', 'INFO', 'L3'),
('PPE3006 Math', 'Projet Personnel de l\'Etudiant III', 'SEM2', 'MATH', 'L3'),
('TD INF3176', 'TD de Techniques de Programmation Avancées', 'SEM2', 'INFO', 'L3'),
('TD INF3186', 'TD de Systèmes d\'Information décisionnels', 'SEM2', 'INFO', 'L3'),
('TD INF3206', 'TD de Programmation Orientée Système', 'SEM2', 'INFO', 'L3'),
('TD INF3216', 'TD d\'Administration & Supervision réseau', 'SEM2', 'INFO', 'L3'),
('TD INF3236', 'TD d\'Apprentissage Artificiel', 'SEM2', 'INFO', 'L3'),
('TD INF3246', 'TD d\'Introduction au traitement d\'images', 'SEM2', 'INFO', 'L3'),
('TD INF3266', 'TD de Théories des codes II', 'SEM2', 'INFO', 'L3'),
('TD INF3276', 'TD de Théorie des Nombres I', 'SEM2', 'INFO', 'L3'),
('TD INF4178', 'TD de Génie Logiciel I', 'SEM2', 'INFO', 'M1'),
('TD INF4188', 'TD de Web sémantique et applications', 'SEM2', 'INFO', 'M1'),
('TD INF4208', 'TD de Réseaux mobiles et sans fils', 'SEM2', 'INFO', 'M1'),
('TD INF4248', 'TD d\'Apprentissage artificiel II', 'SEM2', 'INFO', 'M1'),
('TD INF4268', 'TD de Cryptographie Asymétrique', 'SEM2', 'INFO', 'M1'),
('TD INF4278', 'TD de Courbes Elliptiques 1', 'SEM2', 'INFO', 'M1'),
('TD1 INF2044', 'TD de Statistiques et Analyse de Données ', 'SEM2', 'INFO', 'L2'),
('TD1 INF2054', 'TD de Modélisation et Programmation Orientée Objet en C++ ou Java', 'SEM2', 'INFO', 'L2'),
('TD1 INF2064', 'TD de Programmation Web', 'SEM2', 'INFO', 'L2'),
('TD1 INF3036', 'TD de Base de Données', 'SEM2', 'INFO', 'L3'),
('TD1 INF3046', 'TD de Systèmes d\'Exploitation et Réseaux III', 'SEM2', 'INFO', 'L3'),
('TD1 INF4038', 'TD de Base de données distribuées', 'SEM2', 'INFO', 'M1'),
('TD1 INF4048', 'TD de Compilation', 'SEM2', 'INFO', 'M1'),
('TD2 INF2044', 'TD de Statistiques et Analyse de Données ', 'SEM2', 'INFO', 'L2'),
('TD2 INF2054', 'TD de Modélisation et Programmation Orientée Objet en C++ ou Java', 'SEM2', 'INFO', 'L2'),
('TD2 INF2064', 'TD de Programmation Web', 'SEM2', 'INFO', 'L2'),
('TD2 INF3036', 'TD de Base de Données', 'SEM2', 'INFO', 'L3'),
('TD2 INF3046', 'TD de Systèmes d\'Exploitation et Réseaux III', 'SEM2', 'INFO', 'L3'),
('TD2 INF4038', 'TD de Base de données distribuées', 'SEM2', 'INFO', 'M1'),
('TD2 INF4048', 'TD de Compilation', 'SEM2', 'INFO', 'M1'),
('TD3 INF2044', 'TD de Statistiques et Analyse de Données ', 'SEM2', 'INFO', 'L2'),
('TD3 INF2054', 'TD de Modélisation et Programmation Orientée Objet en C++ ou Java', 'SEM2', 'INFO', 'L2'),
('TD3 INF2064', 'TD de Programmation Web', 'SEM2', 'INFO', 'L2'),
('TD4 INF2044', 'TD de Statistiques et Analyse de Données ', 'SEM2', 'INFO', 'L2'),
('TD4 INF2054', 'TD de Modélisation et Programmation Orientée Objet en C++ ou Java', 'SEM2', 'INFO', 'L2'),
('TD4 INF2064', 'TD de Programmation Web', 'SEM2', 'INFO', 'L2');

-- --------------------------------------------------------

--
-- Structure de la table `cours_groupe`
--

CREATE TABLE `cours_groupe` (
  `code_cours` varchar(100) NOT NULL,
  `id_groupe` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `cours_groupe`
--

INSERT INTO `cours_groupe` (`code_cours`, `id_groupe`) VALUES
('ENG1001', 'L1MATHEng'),
('ENG152 Grp1', 'L1INFOEngGrp1'),
('ENG152 Grp2', 'L1INFOEngGrp2'),
('ENG2144 Grp1', 'L2INFO'),
('ENG2144 Grp2', 'L2INFO'),
('ENG2144 Grp3', 'L2INFO'),
('ENG3035', 'L3DS_GL_R_S'),
('FRA1001', 'L1MATHFranc'),
('FRA152', 'L1INFOFranc'),
('INF142', 'L1INFO'),
('INF152', 'L1INFO'),
('INF2044', 'L2INFO'),
('INF2054', 'L2INFO'),
('INF2064', 'L2INFO'),
('INF3015', 'L3DS_GL_R_S'),
('INF3025', 'L3DS_GL_R_S'),
('INF3036', 'L3DS_GL_R_S'),
('INF3046', 'L3DS_GL_R_S'),
('INF3115', 'L3DS'),
('INF3125', 'L3DS'),
('INF3135', 'L3DS'),
('INF3176', 'L3GL'),
('INF3186', 'L3GL'),
('INF3196', 'L3GL'),
('INF3206', 'L3R'),
('INF3216', 'L3R'),
('INF3226', 'L3R'),
('INF3236', 'L3DS'),
('INF3246', 'L3DS'),
('INF3256', 'L3DS'),
('INF3266', 'L3S'),
('INF3276', 'L3S'),
('INF3286', 'L3S'),
('INF4038', 'M1DS_GL_R_S'),
('INF4048', 'M1DS_GL_R_S'),
('INF4178', 'M1GL'),
('INF4188', 'M1GL'),
('INF4198', 'M1GL'),
('INF4208', 'M1R'),
('INF4218', 'M1R'),
('INF4228', 'M1R'),
('INF4238', 'M1DS'),
('INF4248', 'M1DS'),
('INF4258', 'M1DS'),
('INF4268', 'M1S'),
('INF4278', 'M1S'),
('INF4288', 'M1S'),
('MAT112', 'L1INFO'),
('MAT2074', 'L2MATH'),
('MAT2084', 'L2MATH'),
('MAT2094', 'L2MATH'),
('MAT2104', 'L2MATH'),
('MAT2124', 'L2INFO'),
('MAT2134', 'L2MATH'),
('MAT3056', 'L3MATH'),
('MAT3066', 'L3MATH'),
('MAT3076', 'L3MATH'),
('MAT3086', 'L3MATH'),
('MAT3096', 'L3GEO'),
('MAT3106', 'L3ALG'),
('MAT3116', 'L3ANA'),
('MAT3126', 'L3PROB&STAT'),
('MATH142', 'L1MATH'),
('PHY112', 'L1MATH'),
('PHY122', 'L1MATH'),
('PHY2044', 'L2MATH'),
('PHY2054', 'L2MATH'),
('PPE1002', 'L1MATH'),
('PPE112', 'L1INFO'),
('PPE2004', 'L2INFO'),
('PPE2004 Math', 'L2MATH'),
('PPE3006', 'L3DS_GL_R_S'),
('PPE3006 Math', 'L3MATH'),
('TD INF3176', 'L3GLGrp1'),
('TD INF3186', 'L3GLGrp1'),
('TD INF3206', 'L3RGrp1'),
('TD INF3216', 'L3RGrp1'),
('TD INF3236', 'L3DSGrp1'),
('TD INF3246', 'L3DSGrp1'),
('TD INF3266', 'L3SGrp1'),
('TD INF3276', 'L3SGrp1'),
('TD INF4178', 'M1GLGrp1'),
('TD INF4188', 'M1GLGrp1'),
('TD INF4208', 'M1RGrp1'),
('TD INF4238', 'M1DSGrp1'),
('TD INF4248', 'M1DSGrp1'),
('TD INF4268', 'M1SGrp1'),
('TD INF4278', 'M1SGrp1'),
('TD1 INF2044', 'L2INFOGrp1'),
('TD1 INF2054', 'L2INFOGrp1'),
('TD1 INF2064', 'L2INFOGrp1'),
('TD1 INF3036', 'L3DS_GL_R_SGrp1'),
('TD1 INF3046', 'L3DS_GL_R_SGrp1'),
('TD1 INF4038', 'M1DS_GL_R_SGrp1'),
('TD1 INF4048', 'M1DS_GL_R_SGrp1'),
('TD2 INF2044', 'L2INFOGrp2'),
('TD2 INF2054', 'L2INFOGrp2'),
('TD2 INF2064', 'L2INFOGrp2'),
('TD2 INF3036', 'L3DS_GL_R_SGrp2'),
('TD2 INF3046', 'L3DS_GL_R_SGrp2'),
('TD2 INF4038', 'M1DS_GL_R_SGrp2'),
('TD2 INF4048', 'M1DS_GL_R_SGrp2'),
('TD3 INF2044', 'L2INFOGrp3'),
('TD3 INF2064', 'L2INFOGrp3'),
('TD3 NF2054', 'L2INFOGrp3'),
('TD4 INF2044', 'L2INFOGrp4'),
('TD4 INF2054', 'L2INFOGrp4'),
('TD4 INF2064', 'L2INFOGrp4');

-- --------------------------------------------------------

--
-- Structure de la table `enseignant`
--

CREATE TABLE `enseignant` (
  `id_enseignant` varchar(100) NOT NULL,
  `nom_enseignant` varchar(100) DEFAULT NULL,
  `prenom` varchar(100) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `grade` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `enseignant`
--

INSERT INTO `enseignant` (`id_enseignant`, `nom_enseignant`, `prenom`, `email`, `grade`) VALUES
('11HAM', 'HAMZA', 'Adamou', 'adamou.hamza@facsciences-uy1.cm', 'Dr'),
('12DOM', 'DOMGA', 'Domga', 'domga@gmail.com', 'Dr'),
('14NKO', 'NKONDOCK', 'Nkondock', 'nkondock@gmail.com', 'Dr'),
('15NDO', 'NDOUNDAM', 'Ndoudam', 'ndoudam@gmail.com', 'Dr'),
('16TCH', 'TCHOUNDJA', 'Tchoundja', 'tchoundja.tchoundja@gmil.com', 'Dr'),
('17MAK', 'MAKEMBE', 'Makembe', 'makembe@gmail.com', 'Dr'),
('18MEF', 'MEFOUMA', 'Mefouma', 'mefouma@gmail.com', 'Sécrétaire'),
('19KOU', 'KOUOKAM', 'Kouokam', 'kouokam@gmail.com', 'Dr'),
('1MES', 'MESSI', 'Thomas', 'thomas.messi@facsciences-uy1.cm', 'Dr'),
('20AMI', 'AMINOU', 'Aminou', 'aminou@gmail.com', 'Dr'),
('21NDO', 'NDOUNDAM', 'Ndoudam', 'ndoundam@gmail.com', 'Dr'),
('22KIM', 'KIMBI', 'Kimbi', 'kimbi@gmail.com', 'Dr'),
('24FOK', 'FOKAM', 'Fokam', 'fokam.fokam@gmail.com', 'Dr'),
('25MAG', 'MAGDALENE', 'Fundah', 'fundah.magdaleine@gmail.com', 'Dr'),
('26TSO', 'TSOPZE', 'Norbert', 'norbert.tsopze@facsciences-uy1.cm', 'Dr'),
('27MBA', 'MBAKOP', 'Mbakop', 'mbakop@gmail.com', 'Dr'),
('28NGU', 'NGUEFACK', 'NGuefack', 'nguefack@gmail.com', 'Dr'),
('29MBE', 'MBEHOU', 'Mbehou', 'mbehou@gmail.com', 'Dr'),
('2NZE', 'NZEKON', 'Armel', 'armel.nzekon@facsciences-uy1.cm', 'Dr'),
('30CHE', 'CHENDJOU', 'Chendjou', 'chendjou@gmail.com', 'Dr'),
('31EMV', 'EMVUDU', 'Emvudu', 'emvudu@gmail.com', 'Dr'),
('32DJIA', 'DJIADEU', 'Djadeu', 'djadeu@gmail.com', 'Dr'),
('33NAB', 'NABILADI', 'Nabiladi', 'nabiladi@gmail.com', 'Dr'),
('34AGH', 'AGHOUKENG', 'Aghoukeng', 'aghoukeng@gmail.com', 'Dr'),
('35MBAT', 'MBATAKOU', 'Mbatakou', 'mbatakou@gmailcom', 'Dr'),
('36KIK', 'KIKI', 'Kiki', 'kiki@gmail.com', 'Dr'),
('37SIM', 'SIMO', 'Simo', 'simo@gmail.com', 'Dr'),
('38QUEL', ' ', ' ', ' ', ' '),
('39TAK', 'TAKAM SOH', 'Takam', 'takam@gmail.com', 'Dr'),
('3MEL', 'MELATAGIA', 'Paulin', 'paulin.yonta@gmail.com', 'Dr'),
('40BEKO', 'BEKOLLE', 'Bekolle', 'bekolle@gmail.com', 'Dr'),
('41KIAN', 'KIANPI', 'Kianpi', 'kianpi@gmail.com', 'Dr'),
('42MBA', 'MBANG', 'Mbang', 'mbang@gmail.com', 'Dr'),
('43DOUA', 'DOUANLA', 'Douanla', 'douanla@gmail.com', 'Dr'),
('44NOU', 'NOUNDJEU', 'Noundjeu', 'noundjeu@gmail.com', 'Dr'),
('4TAP', 'TAPAMO', 'Tapamo', 'tapamo.tapamo@facsciences-uy1.cm', 'Dr'),
('5BAY', 'BAYEM', 'Bayem', 'bayem.bayem@facsciences-uy1.cm', 'Dr'),
('6JIO', 'JIOMEKONG', 'Jiomekong', 'jiomekong.jiomekong@facsciences-uy1.cm', 'Dr'),
('7MON', 'MONTHE', 'Valery', 'valery.monthe@facsciences-uy1.cm', 'Dr'),
('8ABE', 'ABESSOLO', 'Abessolo', 'abessolo@gmail.com', 'Dr'),
('9EKO', 'EKODECK', 'Ekodeck', 'ekodeck@gmail.com', 'Dr');

-- --------------------------------------------------------

--
-- Structure de la table `filiere`
--

CREATE TABLE `filiere` (
  `code_filiere` varchar(100) NOT NULL,
  `nom_filiere` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `filiere`
--

INSERT INTO `filiere` (`code_filiere`, `nom_filiere`) VALUES
('BIOS', 'Biosciences'),
('CHIM', 'Chimie'),
('GEOS', 'Geosciences'),
('INFO', 'Informatique'),
('MATH', 'Mathématique'),
('PHYS', 'Physique');

-- --------------------------------------------------------

--
-- Structure de la table `filiere_niveau`
--

CREATE TABLE `filiere_niveau` (
  `code_filiere` varchar(100) NOT NULL,
  `code_niveau` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `filiere_niveau`
--

INSERT INTO `filiere_niveau` (`code_filiere`, `code_niveau`) VALUES
('INFO', 'L1'),
('INFO', 'L2'),
('INFO', 'L3'),
('INFO', 'M1'),
('INFO', 'M2');

-- --------------------------------------------------------

--
-- Structure de la table `groupe`
--

CREATE TABLE `groupe` (
  `id_groupe` varchar(100) NOT NULL,
  `contenance` int(10) DEFAULT NULL,
  `id_classe` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `groupe`
--

INSERT INTO `groupe` (`id_groupe`, `contenance`, `id_classe`) VALUES
('L1INFO', 600, 'L1INFO'),
('L1INFOEng', 400, 'L1INFO'),
('L1INFOEngGrp1', 300, 'L1INFO'),
('L1INFOEngGrp2', 300, 'L1INFO'),
('L1INFOFranc', 200, 'L1INFO'),
('L1MATH', 700, 'L1MATH'),
('L1MATHEng', 250, 'L1MATH'),
('L1MATHFranc', 450, 'L1MATH'),
('L2INFO', 400, 'L2INFO'),
('L2INFOGrp1', 100, 'L2INFO'),
('L2INFOGrp2', 100, 'L2INFO'),
('L2INFOGrp3', 100, 'L2INFO'),
('L2INFOGrp4', 100, 'L2INFO'),
('L2MATH', 500, 'L2MATH'),
('L2MATHEng', 200, 'L2MATH'),
('L2MATHFranc', 300, 'L2MATH'),
('L3ALG', 100, 'L3ALG'),
('L3ANA', 100, 'L3ANA'),
('L3DS', 80, 'L3DS'),
('L3DSGrp1', 80, 'L3DS'),
('L3DS_GL_R_S', 350, 'L3DS_GL_R_S'),
('L3DS_GL_R_S_Grp1', 175, 'L3DS_GL_R_S'),
('L3DS_GL_R_S_Grp2', 175, 'L3DS_GL_R_S'),
('L3GEO', 100, 'L3GEO'),
('L3GL', 100, 'L3GL'),
('L3GLGrp1', 100, 'L3GL'),
('L3MATH', 400, 'L3MATH'),
('L3PROB&STAT', 100, 'L3PROB&STAT'),
('L3R', 90, 'L3R'),
('L3RGrp1', 90, 'L3R'),
('L3S', 80, 'L3S'),
('L3SGrp1', 80, 'L3S'),
('M1DS', 70, 'M1DS'),
('M1DSGrp1', 70, 'M1DS'),
('M1DS_GL_R_S', 300, 'M1_DS_GL_R_S'),
('M1DS_GL_R_S_Grp1', 150, 'M1_DS_GL_R_S'),
('M1DS_GL_R_S_Grp2', 150, 'M1_DS_GL_R_S'),
('M1GL', 80, 'M1GL'),
('M1GLGrp1', 80, 'M1GL'),
('M1R', 80, 'M1R'),
('M1RGrp1', 80, 'M1R'),
('M1S', 60, 'M1S'),
('M1SGrp1', 60, 'M1S');

-- --------------------------------------------------------

--
-- Structure de la table `niveau`
--

CREATE TABLE `niveau` (
  `code_niveau` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `niveau`
--

INSERT INTO `niveau` (`code_niveau`) VALUES
('L1'),
('L2'),
('L3'),
('M1'),
('M2');

-- --------------------------------------------------------

--
-- Structure de la table `plage_horaire`
--

CREATE TABLE `plage_horaire` (
  `id_plage` int(11) NOT NULL,
  `jour` varchar(100) NOT NULL,
  `heure_debut` time NOT NULL,
  `heure_fin` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `plage_horaire`
--

INSERT INTO `plage_horaire` (`id_plage`, `jour`, `heure_debut`, `heure_fin`) VALUES
(1, 'Mercredi', '16:00:00', '18:00:00'),
(2, 'Jeudi', '13:15:00', '15:55:00'),
(3, 'Mercredi', '10:05:00', '12:55:00'),
(4, 'Mercredi', '07:00:00', '09:55:00'),
(5, 'Vendredi', '07:00:00', '09:55:00'),
(6, 'Lundi', '07:00:00', '09:55:00'),
(7, 'Lundi', '10:05:00', '12:55:00'),
(8, 'Mardi', '16:00:00', '18:00:00'),
(9, 'Lundi', '16:05:00', '18:55:00'),
(10, 'Mardi', '07:00:00', '09:55:00'),
(11, 'Mardi', '10:05:00', '12:55:00'),
(12, 'Mardi', '14:00:00', '16:00:00'),
(13, 'Vendredi', '14:00:00', '16:00:00'),
(14, 'Lundi', '13:15:00', '15:55:00'),
(15, 'Dimanche', '07:00:00', '09:55:00'),
(16, 'Vendredi', '10:05:00', '12:55:00'),
(17, 'Vendredi', '13:05:00', '15:55:00'),
(18, 'Lundi', '08:00:00', '10:00:00'),
(19, 'Lundi', '10:00:00', '12:00:00'),
(20, 'Lundi', '12:00:00', '14:00:00'),
(21, 'Lundi', '14:00:00', '16:00:00'),
(22, 'Lundi', '16:00:00', '18:00:00'),
(23, 'Mardi', '08:00:00', '10:00:00'),
(24, 'Mardi', '10:00:00', '12:00:00'),
(26, 'Mercredi', '13:05:00', '15:55:00'),
(27, 'Dimanche', '10:05:00', '12:55:00'),
(28, 'Lundi', '13:05:00', '15:55:00'),
(29, 'Mercredi', '08:00:00', '10:00:00'),
(30, 'Mardi', '13:05:00', '15:55:00'),
(31, 'Mercredi', '10:00:00', '12:00:00'),
(32, 'Mercredi', '12:00:00', '14:00:00'),
(33, 'Mercredi', '14:00:00', '16:00:00'),
(34, 'Vendredi', '16:05:00', '18:55:00'),
(35, 'Samedi', '08:00:00', '10:00:00'),
(36, 'Samedi', '10:00:00', '12:00:00'),
(37, 'Samedi', '12:00:00', '14:00:00'),
(38, 'Samedi', '14:00:00', '16:00:00'),
(39, 'Mardi', '12:00:00', '14:00:00'),
(40, 'Jeudi', '08:00:00', '10:00:00'),
(41, 'Vendredi', '12:00:00', '14:00:00'),
(42, 'Jeudi', '10:00:00', '12:00:00'),
(43, 'Jeudi', '16:00:00', '18:00:00'),
(44, 'Vendredi', '16:00:00', '18:00:00'),
(45, 'Vendredi', '10:00:00', '12:00:00'),
(46, 'Mardi', '16:05:00', '18:55:00'),
(47, 'Mercredi', '13:15:00', '15:55:00'),
(48, 'Mercredi', '16:05:00', '18:55:00'),
(49, 'Jeudi', '07:00:00', '09:55:00'),
(50, 'Jeudi', '10:05:00', '12:55:00'),
(51, 'Jeudi', '13:05:00', '15:55:00'),
(52, 'Jeudi', '14:00:00', '16:00:00'),
(53, 'Jeudi', '16:05:00', '18:55:00'),
(54, 'Vendredi', '08:00:00', '10:00:00'),
(55, 'Samedi', '07:00:00', '09:55:00'),
(56, 'Samedi', '10:05:00', '12:55:00'),
(57, 'Samedi', '13:05:00', '15:55:00'),
(58, 'Samedi', '13:15:00', '15:55:00'),
(59, 'Samedi', '16:05:00', '18:55:00'),
(60, 'Dimanche', '08:00:00', '10:00:00'),
(61, 'Dimanche', '10:00:00', '12:00:00'),
(62, 'Dimanche', '13:05:00', '15:55:00'),
(63, 'Dimanche', '13:15:00', '15:55:00'),
(64, 'Dimanche', '14:00:00', '16:00:00'),
(65, 'Dimanche', '16:00:00', '18:00:00'),
(66, 'Dimanche', '16:05:00', '18:55:00'),
(67, 'Mardi', '13:15:00', '15:55:00'),
(68, 'Jeudi', '12:00:00', '14:00:00'),
(69, 'Vendredi', '13:15:00', '15:55:00'),
(70, 'Samedi', '16:00:00', '18:00:00'),
(71, 'Dimanche', '12:00:00', '14:00:00');

-- --------------------------------------------------------

--
-- Structure de la table `programme`
--

CREATE TABLE `programme` (
  `id_enseignant` varchar(100) NOT NULL,
  `code_cours` varchar(100) NOT NULL,
  `id_plage` int(11) NOT NULL,
  `code_salle` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `programme`
--

INSERT INTO `programme` (`id_enseignant`, `code_cours`, `id_plage`, `code_salle`) VALUES
('38QUEL', 'FRA152', 0, 'A1'),
('1MES', 'INF3256', 1, 'S006'),
('2NZE', 'INF3036', 2, 'A350'),
('3MEL', 'INF3236', 3, 'S006'),
('27MBA', 'MAT112', 5, 'A502'),
('44NOU', 'MAT3056', 5, 'A350'),
('5BAY', 'INF3046', 5, 'A250'),
('4TAP', 'INF4038', 6, 'A135'),
('6JIO', 'INF3176', 6, 'S006'),
('36KIK', 'MAT3096', 7, 'AII'),
('39TAK', 'MAT3106', 7, 'AI'),
('7MON', 'INF3186', 7, 'S006'),
('1MES', 'TD4 INF2064', 8, 'E204'),
('6JIO', 'TD INF4188', 8, 'S003'),
('8ABE', 'INF3196', 8, 'S006'),
('34AGH', 'MAT2084', 9, 'A350'),
('9EKO', 'INF3266', 9, 'S006'),
('11HAM', 'INF3206', 10, 'S006'),
('19KOU', 'INF4048', 10, 'A135'),
('12DOM', 'INF3216', 11, 'S006'),
('12DOM', 'INF3226', 12, 'S006'),
('1MES', 'TD3 INF2064', 12, 'E204'),
('5BAY', 'TD2 INF3046', 12, 'S008'),
('14NKO', 'INF3286', 13, 'S006'),
('4TAP', 'TD INF3246', 13, 'E204'),
('15NDO', 'INF3276', 14, 'S006'),
('16TCH', 'PPE3006', 15, 'A135'),
('39TAK', 'PPE3006 Math', 15, 'A350'),
('12DOM', 'INF4208', 16, 'E203'),
('17MAK', 'INF2044', 16, 'AIII'),
('3MEL', 'INF4248', 16, 'S006'),
('9EKO', 'INF4268', 16, 'S008'),
('21NDO', 'INF4278', 17, 'S008'),
('22KIM', 'INF4178', 17, 'E203'),
('25MAG', 'ENG152 Grp2', 17, 'A1'),
('4TAP', 'INF4238', 17, 'S006'),
('6JIO', 'INF2054', 17, 'A250'),
('17MAK', 'TD1 INF2044', 18, 'E204'),
('17MAK', 'TD2 INF2044', 19, 'E204'),
('3MEL', 'TD INF4248', 19, 'S003'),
('12DOM', 'TD INF4208', 20, 'S003'),
('6JIO', 'TD1 INF2054', 20, 'E204'),
('1MES', 'TD1 INF2064', 21, 'E204'),
('9EKO', 'TD INF4268', 21, 'S003'),
('1MES', 'TD2 INF2064', 22, 'E204'),
('4TAP', 'TD INF4238', 22, 'S003'),
('17MAK', 'TD3 INF2044', 23, 'E204'),
('2NZE', 'TD1 INF3036', 23, 'S008'),
('17MAK', 'TD4 INF2044', 24, 'E204'),
('22KIM', 'TD INF4178', 24, 'S003'),
('5BAY', 'TD1 INF3046', 24, 'S008'),
('1MES', 'INF2064', 26, 'A250'),
('30CHE', 'MAT2114', 26, 'AIII'),
('40BEKO', 'MAT3076', 26, 'A350'),
('18MEF', 'PPE112', 27, 'A502'),
('35MBAT', 'PPE2004 Math', 27, 'POLY I'),
('4TAP', 'PPE2004', 27, 'R101'),
('32DJIA', 'MAT2074', 28, 'A350'),
('20AMI', 'INF4228', 29, 'S003'),
('6JIO', 'TD3 NF2054', 29, 'E204'),
('11HAM', 'INF4218', 30, 'S006'),
('15NDO', 'TD INF3276', 31, 'S006'),
('6JIO', 'TD4 INF2054', 31, 'E204'),
('6JIO', 'INF4198', 31, 'S003'),
('21NDO', 'INF4288', 32, 'S003'),
('2NZE', 'INF4258', 33, 'S003'),
('4TAP', 'TD1 INF4038', 35, 'S008'),
('4TAP', 'TD2 INF4038', 36, 'S008'),
('19KOU', 'TD1 INF4048', 37, 'S008'),
('19KOU', 'TD2 INF4048', 38, 'S008'),
('21NDO', 'TD INF4278', 39, 'S003'),
('2NZE', 'TD2 INF3036', 39, 'S008'),
('6JIO', 'TD2 INF2054', 39, 'E204'),
('3MEL', 'TD INF3236', 40, 'S006'),
('12DOM', 'TD INF3216', 41, 'E204'),
('7MON', 'TD INF3186', 42, 'S006'),
('11HAM', 'TD INF3206', 43, 'S006'),
('9EKO', 'TD INF3266', 44, 'E204'),
('6JIO', 'TD INF3176', 45, 'E204'),
('25MAG', 'ENG2144 Grp1', 48, 'A1'),
('41KIAN', 'MAT3066', 49, 'A250'),
('25MAG', 'ENG2144 Grp2', 50, 'R110'),
('31EMV', 'MAT2104', 50, 'A350'),
('25MAG', 'ENG2144 Grp3', 51, 'R110'),
('27MBA', 'MAT3116', 51, 'A250'),
('24FOK', 'MAT2124', 53, 'R101'),
('25MAG', 'ENG152 Grp1', 53, 'A1'),
('28NGU', 'PPE2004 Math', 62, 'POLY I');

-- --------------------------------------------------------

--
-- Structure de la table `salle`
--

CREATE TABLE `salle` (
  `code_salle` varchar(100) NOT NULL,
  `contenance` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `salle`
--

INSERT INTO `salle` (`code_salle`, `contenance`) VALUES
('A135', 135),
('A250', 250),
('A350', 350),
('A502', 600),
('AI', 200),
('AII', 200),
('AIII', 300),
('E203', 200),
('E204', 90),
('POLY I', 350),
('R101', 101),
('R102', 102),
('R103', 103),
('R104', 104),
('R105', 105),
('R110', 110),
('S003', 150),
('S006', 100),
('S008', 150);

-- --------------------------------------------------------

--
-- Structure de la table `semestre`
--

CREATE TABLE `semestre` (
  `code_semestre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `semestre`
--

INSERT INTO `semestre` (`code_semestre`) VALUES
('SEM1'),
('SEM2');

-- --------------------------------------------------------

--
-- Structure de la table `specialite`
--

CREATE TABLE `specialite` (
  `code_specialite` varchar(100) NOT NULL,
  `code_filiere` varchar(100) NOT NULL,
  `nom_specialite` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Déchargement des données de la table `specialite`
--

INSERT INTO `specialite` (`code_specialite`, `code_filiere`, `nom_specialite`) VALUES
('ALG', 'MATH', 'Algèbre'),
('ANA', 'MATH', 'Analyse'),
('DS', 'INFO', 'Data Science'),
('GEO', 'MATH', 'Geométrie'),
('GL', 'INFO', 'Génie Logiciel'),
('PROB&STAT', 'MATH', 'Probabilité et Statistiques'),
('R', 'INFO', 'Réseau'),
('S', 'INFO', 'Sécurité');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `statut` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`email`, `password`, `statut`) VALUES
('adamou.hamza@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('domga@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('nkondock@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('ndoudam@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('thomas.messi@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('armel.nzekon@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('paulin.yonta@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('tapamo.tapamo@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('bayem.bayem@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('jiomekong.jiomekong@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('valery.monthe@facsciences-uy1.cm', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('abessolo@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('ekodeck@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('juniortchoupe5@gmail.com', '$2a$12$beObpiCFize6h9XUND8tz.RASVWwi8SoKFaA/6MkCabkd6l9eQNe.', 'admin'),
('tchoundja.tchoundja@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant'),
('makembe@gmail.com', '$2a$12$Q5pmTkhFR530yAAJ7TqID.AYK6Qn7khEVShMe0XTHaOvRjNDm9syy', 'enseignant');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `annee`
--
ALTER TABLE `annee`
  ADD PRIMARY KEY (`id_annee`);

--
-- Index pour la table `annee_cours`
--
ALTER TABLE `annee_cours`
  ADD PRIMARY KEY (`id_annee`,`code_cours`),
  ADD KEY `code_cours` (`code_cours`);

--
-- Index pour la table `classe`
--
ALTER TABLE `classe`
  ADD PRIMARY KEY (`id_classe`);

--
-- Index pour la table `classe_specialite`
--
ALTER TABLE `classe_specialite`
  ADD PRIMARY KEY (`id_classe`,`code_specialite`),
  ADD KEY `code_specialite` (`code_specialite`);

--
-- Index pour la table `cours`
--
ALTER TABLE `cours`
  ADD PRIMARY KEY (`code_cours`),
  ADD KEY `code_semestre` (`code_semestre`),
  ADD KEY `code_filiere` (`code_filiere`),
  ADD KEY `code_niveau` (`code_niveau`);

--
-- Index pour la table `cours_groupe`
--
ALTER TABLE `cours_groupe`
  ADD PRIMARY KEY (`code_cours`,`id_groupe`),
  ADD KEY `id_groupe` (`id_groupe`);

--
-- Index pour la table `enseignant`
--
ALTER TABLE `enseignant`
  ADD PRIMARY KEY (`id_enseignant`);

--
-- Index pour la table `filiere`
--
ALTER TABLE `filiere`
  ADD PRIMARY KEY (`code_filiere`);

--
-- Index pour la table `filiere_niveau`
--
ALTER TABLE `filiere_niveau`
  ADD PRIMARY KEY (`code_filiere`,`code_niveau`),
  ADD KEY `code_niveau` (`code_niveau`);

--
-- Index pour la table `groupe`
--
ALTER TABLE `groupe`
  ADD PRIMARY KEY (`id_groupe`),
  ADD KEY `id_classe` (`id_classe`);

--
-- Index pour la table `niveau`
--
ALTER TABLE `niveau`
  ADD PRIMARY KEY (`code_niveau`);

--
-- Index pour la table `plage_horaire`
--
ALTER TABLE `plage_horaire`
  ADD PRIMARY KEY (`id_plage`);

--
-- Index pour la table `programme`
--
ALTER TABLE `programme`
  ADD PRIMARY KEY (`id_plage`,`id_enseignant`,`code_salle`,`code_cours`),
  ADD KEY `id_enseignant` (`id_enseignant`),
  ADD KEY `code_cours` (`code_cours`),
  ADD KEY `code_salle` (`code_salle`);

--
-- Index pour la table `salle`
--
ALTER TABLE `salle`
  ADD PRIMARY KEY (`code_salle`);

--
-- Index pour la table `semestre`
--
ALTER TABLE `semestre`
  ADD PRIMARY KEY (`code_semestre`);

--
-- Index pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD PRIMARY KEY (`code_specialite`),
  ADD KEY `code_filiere` (`code_filiere`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `annee_cours`
--
ALTER TABLE `annee_cours`
  ADD CONSTRAINT `annee_cours_ibfk_1` FOREIGN KEY (`id_annee`) REFERENCES `annee` (`id_annee`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `annee_cours_ibfk_2` FOREIGN KEY (`code_cours`) REFERENCES `cours` (`code_cours`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `classe_specialite`
--
ALTER TABLE `classe_specialite`
  ADD CONSTRAINT `classe_specialite_ibfk_1` FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id_classe`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `classe_specialite_ibfk_2` FOREIGN KEY (`code_specialite`) REFERENCES `specialite` (`code_specialite`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `cours_groupe`
--
ALTER TABLE `cours_groupe`
  ADD CONSTRAINT `cours_groupe_ibfk_1` FOREIGN KEY (`code_cours`) REFERENCES `cours` (`code_cours`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `cours_groupe_ibfk_2` FOREIGN KEY (`id_groupe`) REFERENCES `groupe` (`id_groupe`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `filiere_niveau`
--
ALTER TABLE `filiere_niveau`
  ADD CONSTRAINT `filiere_niveau_ibfk_1` FOREIGN KEY (`code_filiere`) REFERENCES `filiere` (`code_filiere`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `filiere_niveau_ibfk_2` FOREIGN KEY (`code_niveau`) REFERENCES `niveau` (`code_niveau`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `programme`
--
ALTER TABLE `programme`
  ADD CONSTRAINT `programme_ibfk_1` FOREIGN KEY (`id_enseignant`) REFERENCES `enseignant` (`id_enseignant`) ON UPDATE CASCADE,
  ADD CONSTRAINT `programme_ibfk_3` FOREIGN KEY (`id_plage`) REFERENCES `plage_horaire` (`id_plage`) ON DELETE NO ACTION ON UPDATE CASCADE,
  ADD CONSTRAINT `programme_ibfk_4` FOREIGN KEY (`code_salle`) REFERENCES `salle` (`code_salle`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Contraintes pour la table `specialite`
--
ALTER TABLE `specialite`
  ADD CONSTRAINT `specialite_ibfk_1` FOREIGN KEY (`code_filiere`) REFERENCES `filiere` (`code_filiere`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
