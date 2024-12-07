-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_dua" (
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
    "audio" TEXT,
    CONSTRAINT "dua_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "category" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "dua_subcat_id_fkey" FOREIGN KEY ("subcat_id") REFERENCES "sub_category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_dua" ("audio", "bottom_bn", "bottom_en", "cat_id", "clean_arabic", "dua_arabic", "dua_id", "dua_indopak", "dua_name_bn", "dua_name_en", "id", "refference_bn", "refference_en", "subcat_id", "top_bn", "top_en", "translation_bn", "translation_en", "transliteration_bn", "transliteration_en") SELECT "audio", "bottom_bn", "bottom_en", "cat_id", "clean_arabic", "dua_arabic", "dua_id", "dua_indopak", "dua_name_bn", "dua_name_en", "id", "refference_bn", "refference_en", "subcat_id", "top_bn", "top_en", "translation_bn", "translation_en", "transliteration_bn", "transliteration_en" FROM "dua";
DROP TABLE "dua";
ALTER TABLE "new_dua" RENAME TO "dua";
CREATE TABLE "new_sub_category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cat_id" INTEGER,
    "subcat_id" INTEGER,
    "subcat_name_bn" TEXT,
    "subcat_name_en" TEXT,
    "no_of_dua" INTEGER,
    CONSTRAINT "sub_category_cat_id_fkey" FOREIGN KEY ("cat_id") REFERENCES "category" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_sub_category" ("cat_id", "id", "no_of_dua", "subcat_id", "subcat_name_bn", "subcat_name_en") SELECT "cat_id", "id", "no_of_dua", "subcat_id", "subcat_name_bn", "subcat_name_en" FROM "sub_category";
DROP TABLE "sub_category";
ALTER TABLE "new_sub_category" RENAME TO "sub_category";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
