-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL,
    "isCompleted" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
