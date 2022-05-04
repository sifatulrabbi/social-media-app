CREATE TABLE profiles(
    id INTEGER PRIMARY KEY, 
    media INTEGER, 
    type VARCHAR(255) NOT NULL, 
    specialization VARCHAR(255) NOT NULL, 
    colleagues INTEGER[] DEFAULT, 
    attribute VARCHAR(255) NOT NULL, 
    createdAt DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, `userId` INTEGER, `organizationId` INTEGER, `orgId` INTEGER, PRIMARY KEY (`id`), FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE RESTRICT, FOREIGN KEY (`organizationId`) REFERENCES `organizations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE, FOREIGN KEY (`orgId`) REFERENCES `organizations` (`id`) ON DELETE SET NULL ON UPDATE CASCADE) ENGINE=InnoDB;
