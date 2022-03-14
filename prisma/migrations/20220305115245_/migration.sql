-- CreateTable
CREATE TABLE "TeamMember" (
    "username" TEXT NOT NULL,
    "first" TEXT NOT NULL,
    "last" TEXT,
    "title" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "TeamMember_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "tag" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Social" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "service" TEXT NOT NULL,

    CONSTRAINT "Social_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_username_fkey" FOREIGN KEY ("username") REFERENCES "TeamMember"("username") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Social" ADD CONSTRAINT "Social_username_fkey" FOREIGN KEY ("username") REFERENCES "TeamMember"("username") ON DELETE RESTRICT ON UPDATE CASCADE;
