-- CreateTable
CREATE TABLE "Jogos" (
    "id" TEXT NOT NULL,
    "Title" TEXT NOT NULL,
    "CoverImageUrl" TEXT NOT NULL,
    "Description" TEXT NOT NULL,
    "Year" INTEGER NOT NULL,
    "Imdbscore" INTEGER NOT NULL,
    "YtbUrl" TEXT NOT NULL,
    "GameplayYbtUrl" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jogos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Generos" (
    "id" TEXT NOT NULL,
    "Name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Generos_pkey" PRIMARY KEY ("id")
);
