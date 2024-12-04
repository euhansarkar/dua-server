/*
  Warnings:

  - You are about to drop the `Category` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Dua` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SubCategory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Category";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Dua";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "SubCategory";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "dua" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER,
    "subcat_id" INTEGER,
    "dua_id" INTEGER,
    "dua_name_bn" TEXT,
    "dua_name_en" TEXT,
    "top_bn" TEXT,
    "top_en" TEXT,
    "dua_arabic" TEXT,
    "dua_indopak" TEXT,
    "clean_arabic" TEXT,
    "transliteration_bn" TEXT,
    "transliteration_en" TEXT,
    "translation_bn" TEXT,
    "translation_en" TEXT,
    "bottom_bn" TEXT,
    "bottom_en" TEXT,
    "refference_bn" TEXT,
    "refference_en" TEXT,
    "audio" TEXT
);

-- CreateTable
CREATE TABLE "category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER,
    "cat_name_bn" TEXT,
    "cat_name_en" TEXT,
    "no_of_subcat" INTEGER,
    "no_of_dua" INTEGER,
    "cat_icon" TEXT
);

-- CreateTable
CREATE TABLE "sub_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER,
    "subcat_id" INTEGER,
    "subcat_name_bn" TEXT,
    "subcat_name_en" TEXT,
    "no_of_dua" INTEGER
);
