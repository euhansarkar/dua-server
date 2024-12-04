-- CreateTable
CREATE TABLE "SqlbTempTable1" (
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
CREATE TABLE "Dua" (
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
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER,
    "cat_name_bn" TEXT,
    "cat_name_en" TEXT,
    "no_of_subcat" INTEGER,
    "no_of_dua" INTEGER,
    "cat_icon" TEXT
);

-- CreateTable
CREATE TABLE "SubCategory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER,
    "subcat_id" INTEGER,
    "subcat_name_bn" TEXT,
    "subcat_name_en" TEXT,
    "no_of_dua" INTEGER
);

-- CreateTable
CREATE TABLE "Version" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "date" TEXT,
    "version" TEXT,
    "comment" TEXT
);
