-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL DEFAULT '577da0e0-7339-44b4-b0c4-788b7c10409a',
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "StreamTargets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "disabled" BOOLEAN NOT NULL DEFAULT false,
    "profile" TEXT NOT NULL DEFAULT 'source',
    "videoOnly" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TEXT NOT NULL,
    "userUserId" TEXT,
    "streamName" TEXT
);

-- CreateTable
CREATE TABLE "Stream" (
    "name" TEXT NOT NULL,
    "id" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "lastSeen" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "isHealthy" BOOLEAN NOT NULL,
    "createdAt" TEXT NOT NULL,
    "parentId" TEXT NOT NULL,
    "streamKey" TEXT NOT NULL,
    "playbackId" TEXT NOT NULL,
    "playbackPolicy" JSONB NOT NULL,
    "profiles" JSONB NOT NULL,
    "record" BOOLEAN NOT NULL,
    "suspended" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_userId_key" ON "User"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "StreamTargets_name_key" ON "StreamTargets"("name");

-- CreateIndex
CREATE UNIQUE INDEX "StreamTargets_targetId_key" ON "StreamTargets"("targetId");

-- CreateIndex
CREATE UNIQUE INDEX "Stream_name_key" ON "Stream"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Stream_id_key" ON "Stream"("id");

-- AddForeignKey
ALTER TABLE "StreamTargets" ADD CONSTRAINT "StreamTargets_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "StreamTargets" ADD CONSTRAINT "StreamTargets_streamName_fkey" FOREIGN KEY ("streamName") REFERENCES "Stream"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
