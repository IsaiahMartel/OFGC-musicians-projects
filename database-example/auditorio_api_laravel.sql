-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-12-2021 a las 22:29:40
-- Versión del servidor: 10.4.19-MariaDB
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `auditorio_api_laravel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `composers`
--

CREATE TABLE `composers` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameComposer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `surnameComposer` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `composers`
--

INSERT INTO `composers` (`id`, `nameComposer`, `surnameComposer`) VALUES
(1, 'Antonio', 'Vivaldi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `control_versions`
--

CREATE TABLE `control_versions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `startDate` date NOT NULL,
  `upgradeDate` date DEFAULT NULL,
  `published` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `directors`
--

CREATE TABLE `directors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameDirector` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleDirector` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `directors`
--

INSERT INTO `directors` (`id`, `nameDirector`, `titleDirector`, `created_at`, `updated_at`) VALUES
(1, 'Pedro García Romero Sánchezz', 'Director titular', '2021-12-16 20:02:39', '2021-12-16 20:02:39');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `director_projects`
--

CREATE TABLE `director_projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `director_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `director_projects`
--

INSERT INTO `director_projects` (`id`, `project_id`, `director_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-12-16 20:06:35', '2021-12-16 20:06:35');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2021_10_30_143843_create_seasons_table', 1),
(6, '2021_11_03_170203_projects', 1),
(7, '2021_11_08_174431_composers', 1),
(8, '2021_11_08_174649_works', 1),
(9, '2021_11_08_174909_playlists', 1),
(10, '2021_11_08_200122_directors', 1),
(11, '2021_11_08_200141_soloists', 1),
(12, '2021_11_08_200159_director-projects', 1),
(13, '2021_11_08_200213_soloist-projects', 1),
(14, '2021_11_08_200225_type-schedules', 1),
(15, '2021_11_08_200238_rooms', 1),
(16, '2021_11_08_200249_schedules', 1),
(17, '2021_11_15_174019_control_versions', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `playlists`
--

CREATE TABLE `playlists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `stringProject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orchestrationTotal` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `work_id` bigint(20) UNSIGNED NOT NULL,
  `composer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `playlists`
--

INSERT INTO `playlists` (`id`, `stringProject`, `order`, `orchestrationTotal`, `project_id`, `work_id`, `composer_id`, `created_at`, `updated_at`) VALUES
(4, 'AAK', 'Vivaldi / Händel / Pachelbel /', '10:00 Sibelius', 1, 4, 1, '2021-12-16 20:20:24', '2021-12-16 20:20:24'),
(5, 'AAK', 'Vivaldi / Händel / Pachelbel /', '10:00 Sibelius', 1, 5, 1, '2021-12-16 20:20:26', '2021-12-16 20:20:26'),
(6, 'AAK', 'Vivaldi / Händel / Pachelbel /', '10:00 Sibelius', 1, 6, 1, '2021-12-16 20:20:30', '2021-12-16 20:20:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `projects`
--

CREATE TABLE `projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameProject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDateProject` date NOT NULL,
  `endDateProject` date NOT NULL,
  `published` tinyint(1) NOT NULL,
  `orchestrationProject` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `seasons_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `nameProject`, `startDateProject`, `endDateProject`, `published`, `orchestrationProject`, `seasons_id`, `created_at`, `updated_at`) VALUES
(1, 'Inicio de navidad', '2021-11-20', '2021-11-30', 1, '2/2/2/2/2', 1, '2021-12-16 19:57:45', '2021-12-16 19:57:45'),
(2, 'Finales de navidad (antes de vacaciones)', '2021-12-10', '2021-12-22', 1, '4/4/4/4/4', 1, '2021-12-16 20:18:00', '2021-12-16 20:18:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameRoom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `acronymRoom` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rooms`
--

INSERT INTO `rooms` (`id`, `nameRoom`, `acronymRoom`, `created_at`, `updated_at`) VALUES
(1, 'Aula 8', 'A8', '2021-12-16 19:58:06', '2021-12-16 19:58:06');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `schedules`
--

CREATE TABLE `schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `date` date NOT NULL,
  `type_schedules_id` bigint(20) UNSIGNED NOT NULL,
  `hourRange` time NOT NULL,
  `note` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rooms_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `schedules`
--

INSERT INTO `schedules` (`id`, `project_id`, `date`, `type_schedules_id`, `hourRange`, `note`, `rooms_id`, `created_at`, `updated_at`) VALUES
(3, 1, '2021-11-23', 1, '10:00:00', 'Hemos subido a fase 3 así que tienen que medirse la temperatura fuera', 1, '2021-12-16 20:01:41', '2021-12-16 20:01:41'),
(5, 1, '2021-11-24', 4, '20:00:00', 'Ensayo corto', 1, '2021-12-16 20:16:18', '2021-12-16 20:16:18'),
(6, 1, '2021-11-30', 5, '20:00:00', 'Concierto nocturno', 1, '2021-12-16 20:16:56', '2021-12-16 20:16:56'),
(7, 1, '2021-11-30', 6, '20:00:00', 'Ensayo precalentamiento', 1, '2021-12-16 20:22:35', '2021-12-16 20:22:35'),
(8, 1, '2021-11-30', 6, '20:00:00', 'Ensayo precalentamiento', 1, '2021-12-16 20:24:57', '2021-12-16 20:24:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seasons`
--

CREATE TABLE `seasons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `NameSeason` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `startDate` date NOT NULL,
  `endDate` date NOT NULL,
  `noteSeason` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `seasons`
--

INSERT INTO `seasons` (`id`, `NameSeason`, `startDate`, `endDate`, `noteSeason`, `created_at`, `updated_at`) VALUES
(1, 'Navidad', '2021-11-20', '2021-12-22', '¡Empiezan las fiestas!', '2021-12-16 19:54:57', '2021-12-16 19:54:57');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soloists`
--

CREATE TABLE `soloists` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameSoloist` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `titleSoloist` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `soloists`
--

INSERT INTO `soloists` (`id`, `nameSoloist`, `titleSoloist`, `created_at`, `updated_at`) VALUES
(1, 'Juan Bosco Herrero Martín', 'Violonchelo', '2021-12-16 20:03:10', '2021-12-16 20:03:10'),
(3, 'Marta Herrero Martín', 'Violín', '2021-12-16 20:04:19', '2021-12-16 20:04:19'),
(4, 'Juana María Hernández Marrero', 'Piano', '2021-12-16 20:04:42', '2021-12-16 20:04:42'),
(5, 'Federico Lomenoz García', 'Arpa', '2021-12-16 20:05:29', '2021-12-16 20:05:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `soloist_projects`
--

CREATE TABLE `soloist_projects` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `project_id` bigint(20) UNSIGNED NOT NULL,
  `soloist_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `soloist_projects`
--

INSERT INTO `soloist_projects` (`id`, `project_id`, `soloist_id`, `created_at`, `updated_at`) VALUES
(1, 1, 1, '2021-12-16 20:06:11', '2021-12-16 20:06:11'),
(3, 1, 3, '2021-12-16 20:06:18', '2021-12-16 20:06:18'),
(4, 1, 4, '2021-12-16 20:06:20', '2021-12-16 20:06:20'),
(5, 1, 5, '2021-12-16 20:06:23', '2021-12-16 20:06:23');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_schedules`
--

CREATE TABLE `type_schedules` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hourRangeType` time NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `type_schedules`
--

INSERT INTO `type_schedules` (`id`, `nameType`, `hourRangeType`, `created_at`, `updated_at`) VALUES
(1, 'ENSAYO AM', '10:00:00', '2021-12-16 20:01:39', '2021-12-16 20:01:39'),
(2, 'Concierto', '10:00:00', '2021-12-16 20:13:13', '2021-12-16 20:13:13'),
(3, 'ENSAYO PM', '10:00:00', '2021-12-16 20:14:52', '2021-12-16 20:14:52'),
(4, 'ENSAYO PM', '20:00:00', '2021-12-16 20:14:57', '2021-12-16 20:14:57'),
(5, 'Concierto', '22:00:00', '2021-12-16 20:16:29', '2021-12-16 20:16:29'),
(6, 'Ensayo AM', '21:00:00', '2021-12-16 20:22:04', '2021-12-16 20:22:04');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `works`
--

CREATE TABLE `works` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nameWork` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` time NOT NULL,
  `notes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orchestrationWork` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `stringWork` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `composer_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `works`
--

INSERT INTO `works` (`id`, `nameWork`, `duration`, `notes`, `orchestrationWork`, `stringWork`, `composer_id`, `created_at`, `updated_at`) VALUES
(1, 'Las 4 estaciones', '45:30:00', 'Esta obra es larga díficl, trabajaremos mucho en ella en clase', 'Symphony No. 2 in D major, Opus 73', '3 (1.2.p). 2 (1.2/eh). 3 (1.2.bcl). 2 (1.cbn)– 4.3.3.1 – Timp+4.Hp.0', 1, '2021-12-16 20:08:24', '2021-12-16 20:08:24'),
(2, 'Las 5 estaciones', '20:05:00', 'Pocos lo saben, pero Vivaldi llegó a escribir las 5 estaciones', 'Concierto para violonchelo op. 104 in B minor', '(1.2/pic).2.2.2 – 2.2.3.0 – Timp+0.0.0', 1, '2021-12-16 20:09:27', '2021-12-16 20:09:27'),
(3, 'Las 5 estaciones II, las estaciones contratacan', '20:05:00', '¡TENEMOS LA PARTITURA EXCLUSIVA DE ESTA OBRA!', 'Concierto para violonchelo, piano, violín y arpa op. 104 in A minor', 'Timp+0.0.02.2.2 – 2.2.3.0 – (1.2/pic).', 1, '2021-12-16 20:10:45', '2021-12-16 20:10:45'),
(4, 'Las 5 estaciones II, las estaciones contratacan', '00:20:05', '¡TENEMOS LA PARTITURA EXCLUSIVA DE ESTA OBRA!', 'Concierto para violonchelo, piano, violín y arpa op. 104 in A minor', 'Timp+0.0.02.2.2 – 2.2.3.0 – (1.2/pic).', 1, '2021-12-16 20:19:45', '2021-12-16 20:19:45'),
(5, 'Las 5 estaciones', '00:45:30', '¡TENEMOS LA PARTITURA EXCLUSIVA DE ESTA OBRA!', 'Concierto para violonchelo, piano, violín y arpa op. 104 in A minor', 'Timp+0.0.02.2.2 – 2.2.3.0 – (1.2/pic).', 1, '2021-12-16 20:19:56', '2021-12-16 20:19:56'),
(6, 'Las 4 estaciones', '00:20:00', '¡TENEMOS LA PARTITURA EXCLUSIVA DE ESTA OBRA!', 'Concierto para violonchelo, piano, violín y arpa op. 104 in A minor', 'Timp+0.0.02.2.2 – 2.2.3.0 – (1.2/pic).', 1, '2021-12-16 20:20:13', '2021-12-16 20:20:13');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `composers`
--
ALTER TABLE `composers`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `control_versions`
--
ALTER TABLE `control_versions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `control_versions_project_id_foreign` (`project_id`);

--
-- Indices de la tabla `directors`
--
ALTER TABLE `directors`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `director_projects`
--
ALTER TABLE `director_projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `director_projects_project_id_foreign` (`project_id`),
  ADD KEY `director_projects_director_id_foreign` (`director_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `playlists_project_id_foreign` (`project_id`),
  ADD KEY `playlists_work_id_foreign` (`work_id`),
  ADD KEY `playlists_composer_id_foreign` (`composer_id`);

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `projects_seasons_id_foreign` (`seasons_id`);

--
-- Indices de la tabla `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`id`),
  ADD KEY `schedules_project_id_foreign` (`project_id`),
  ADD KEY `schedules_type_schedules_id_foreign` (`type_schedules_id`),
  ADD KEY `schedules_rooms_id_foreign` (`rooms_id`);

--
-- Indices de la tabla `seasons`
--
ALTER TABLE `seasons`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `soloists`
--
ALTER TABLE `soloists`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `soloist_projects`
--
ALTER TABLE `soloist_projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `soloist_projects_project_id_foreign` (`project_id`),
  ADD KEY `soloist_projects_soloist_id_foreign` (`soloist_id`);

--
-- Indices de la tabla `type_schedules`
--
ALTER TABLE `type_schedules`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `works`
--
ALTER TABLE `works`
  ADD PRIMARY KEY (`id`),
  ADD KEY `works_composer_id_foreign` (`composer_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `composers`
--
ALTER TABLE `composers`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `control_versions`
--
ALTER TABLE `control_versions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `directors`
--
ALTER TABLE `directors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `director_projects`
--
ALTER TABLE `director_projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `playlists`
--
ALTER TABLE `playlists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `schedules`
--
ALTER TABLE `schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `seasons`
--
ALTER TABLE `seasons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `soloists`
--
ALTER TABLE `soloists`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `soloist_projects`
--
ALTER TABLE `soloist_projects`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `type_schedules`
--
ALTER TABLE `type_schedules`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `works`
--
ALTER TABLE `works`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `control_versions`
--
ALTER TABLE `control_versions`
  ADD CONSTRAINT `control_versions_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `director_projects`
--
ALTER TABLE `director_projects`
  ADD CONSTRAINT `director_projects_director_id_foreign` FOREIGN KEY (`director_id`) REFERENCES `directors` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `director_projects_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `playlists`
--
ALTER TABLE `playlists`
  ADD CONSTRAINT `playlists_composer_id_foreign` FOREIGN KEY (`composer_id`) REFERENCES `composers` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `playlists_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `playlists_work_id_foreign` FOREIGN KEY (`work_id`) REFERENCES `works` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `projects`
--
ALTER TABLE `projects`
  ADD CONSTRAINT `projects_seasons_id_foreign` FOREIGN KEY (`seasons_id`) REFERENCES `seasons` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `schedules_rooms_id_foreign` FOREIGN KEY (`rooms_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `schedules_type_schedules_id_foreign` FOREIGN KEY (`type_schedules_id`) REFERENCES `type_schedules` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `soloist_projects`
--
ALTER TABLE `soloist_projects`
  ADD CONSTRAINT `soloist_projects_project_id_foreign` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `soloist_projects_soloist_id_foreign` FOREIGN KEY (`soloist_id`) REFERENCES `soloists` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `works`
--
ALTER TABLE `works`
  ADD CONSTRAINT `works_composer_id_foreign` FOREIGN KEY (`composer_id`) REFERENCES `composers` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
