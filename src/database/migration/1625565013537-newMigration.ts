import {MigrationInterface, QueryRunner} from "typeorm";

export class newMigration1625565013537 implements MigrationInterface {
    name = 'newMigration1625565013537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bike_model` DROP FOREIGN KEY `FK_58890ebe484c5170e8cbfec4632`");
        await queryRunner.query("DROP INDEX `FK_3d2f174ef04fb312fdebd0ddc53` ON `session`");
        await queryRunner.query("DROP INDEX `FK_6b6d0e4dc88105a4a11103dd2cd` ON `subscription`");
        await queryRunner.query("DROP INDEX `FK_cc906b4bc892b048f1b654d2aa0` ON `subscription`");
        await queryRunner.query("DROP INDEX `FK_f8e849201da83b87f78c7497dde` ON `invoice`");
        await queryRunner.query("DROP INDEX `FK_1ca5dce89a3293e6b88cd14c0ca` ON `invoice`");
        await queryRunner.query("DROP INDEX `FK_c45ed95b87402ee9e4b3c8dc81f` ON `issue`");
        await queryRunner.query("DROP INDEX `FK_3d7783301d844fd0662be2e2c12` ON `issue_thread`");
        await queryRunner.query("DROP INDEX `FK_ad292289122f03b3b0dee720ecb` ON `issue_thread`");
        await queryRunner.query("DROP INDEX `FK_7dbe51843af72c7a9aa07ccb1fe` ON `station_monitoring`");
        await queryRunner.query("DROP INDEX `FK_01cfdb2bcaaccd90dd10e67a58a` ON `station_maintenance_thread`");
        await queryRunner.query("DROP INDEX `FK_48161fff9f96d02d2fb5dcabb20` ON `station_maintenance_thread`");
        await queryRunner.query("ALTER TABLE `plan` DROP COLUMN `isUnlimited`");
        await queryRunner.query("ALTER TABLE `plan` ADD `freeMinutes` decimal(15,2) NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `plan` ADD `isActive` tinyint NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `session` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `plan` CHANGE `price` `price` decimal(15,2) NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `plan` CHANGE `costPerMinute` `costPerMinute` decimal(15,2) NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `subscription` CHANGE `planId` `planId` int NULL");
        await queryRunner.query("ALTER TABLE `subscription` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `invoice` CHANGE `amount` `amount` decimal(15,2) NOT NULL DEFAULT 0");
        await queryRunner.query("ALTER TABLE `invoice` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `invoice` CHANGE `subscriptionId` `subscriptionId` int NULL");
        await queryRunner.query("ALTER TABLE `issue` CHANGE `creatorId` `creatorId` int NULL");
        await queryRunner.query("ALTER TABLE `issue_thread` CHANGE `authorId` `authorId` int NULL");
        await queryRunner.query("ALTER TABLE `issue_thread` CHANGE `issueId` `issueId` int NULL");
        await queryRunner.query("ALTER TABLE `station_monitoring` CHANGE `batteryPercent` `batteryPercent` double NOT NULL");
        await queryRunner.query("ALTER TABLE `station_monitoring` CHANGE `chargingPower` `chargingPower` double NOT NULL");
        await queryRunner.query("ALTER TABLE `station_monitoring` CHANGE `stationId` `stationId` int NULL");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` CHANGE `stationBreakdownId` `stationBreakdownId` int NULL");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `batteryCapacity` `batteryCapacity` double NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `weight` `weight` double NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `maxPower` `maxPower` double NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `maxSpeed` `maxSpeed` double NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `maxDistance` `maxDistance` double NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `icon` `icon` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `bikeManufacturerId` `bikeManufacturerId` int NULL");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` DROP FOREIGN KEY `FK_1ae68bf7d756b2d1170a774873a`");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` DROP FOREIGN KEY `FK_e9179d5c566c85e41cd265cbdd9`");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` CHANGE `bikeBreakdownId` `bikeBreakdownId` int NULL");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `bike` DROP FOREIGN KEY `FK_5d42265bfc04e9bc800416ee5b3`");
        await queryRunner.query("ALTER TABLE `bike` DROP FOREIGN KEY `FK_434c39c48566ad3de7ec621ca61`");
        await queryRunner.query("ALTER TABLE `bike` CHANGE `batteryPercent` `batteryPercent` double NOT NULL");
        await queryRunner.query("ALTER TABLE `bike` CHANGE `stationId` `stationId` int NULL");
        await queryRunner.query("ALTER TABLE `bike` CHANGE `modelId` `modelId` int NULL");
        await queryRunner.query("ALTER TABLE `station` CHANGE `coordinateX` `coordinateX` double NOT NULL");
        await queryRunner.query("ALTER TABLE `station` CHANGE `coordinateY` `coordinateY` double NOT NULL");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_cb33e04b103feefa3ef5938ba1e`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_9cfe718b1f69fcda6bf7102243a`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_9ae4b85478d3d8adb6e8f6f7172`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_6608766e195dacfe423e74c1ac9`");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `startStationId` `startStationId` int NULL");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `endStationId` `endStationId` int NULL");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `userId` `userId` int NULL");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `bikeId` `bikeId` int NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `password` `password` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `user` CHANGE `resetPasswordToken` `resetPasswordToken` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `article` DROP FOREIGN KEY `FK_a9c5f4ec6cceb1604b4a3c84c87`");
        await queryRunner.query("ALTER TABLE `article` CHANGE `authorId` `authorId` int NULL");
        await queryRunner.query("ALTER TABLE `session` ADD CONSTRAINT `FK_3d2f174ef04fb312fdebd0ddc53` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `subscription` ADD CONSTRAINT `FK_6b6d0e4dc88105a4a11103dd2cd` FOREIGN KEY (`planId`) REFERENCES `plan`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `subscription` ADD CONSTRAINT `FK_cc906b4bc892b048f1b654d2aa0` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `invoice` ADD CONSTRAINT `FK_f8e849201da83b87f78c7497dde` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `invoice` ADD CONSTRAINT `FK_1ca5dce89a3293e6b88cd14c0ca` FOREIGN KEY (`subscriptionId`) REFERENCES `subscription`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `issue` ADD CONSTRAINT `FK_c45ed95b87402ee9e4b3c8dc81f` FOREIGN KEY (`creatorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `issue_thread` ADD CONSTRAINT `FK_3d7783301d844fd0662be2e2c12` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `issue_thread` ADD CONSTRAINT `FK_ad292289122f03b3b0dee720ecb` FOREIGN KEY (`issueId`) REFERENCES `issue`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `station_monitoring` ADD CONSTRAINT `FK_7dbe51843af72c7a9aa07ccb1fe` FOREIGN KEY (`stationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` ADD CONSTRAINT `FK_01cfdb2bcaaccd90dd10e67a58a` FOREIGN KEY (`stationBreakdownId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` ADD CONSTRAINT `FK_48161fff9f96d02d2fb5dcabb20` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike_model` ADD CONSTRAINT `FK_a6f40f5c24d0100dac3235cce9a` FOREIGN KEY (`bikeManufacturerId`) REFERENCES `bike_manufacturer`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` ADD CONSTRAINT `FK_1ae68bf7d756b2d1170a774873a` FOREIGN KEY (`bikeBreakdownId`) REFERENCES `bike`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` ADD CONSTRAINT `FK_e9179d5c566c85e41cd265cbdd9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike` ADD CONSTRAINT `FK_5d42265bfc04e9bc800416ee5b3` FOREIGN KEY (`stationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike` ADD CONSTRAINT `FK_434c39c48566ad3de7ec621ca61` FOREIGN KEY (`modelId`) REFERENCES `bike_model`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_cb33e04b103feefa3ef5938ba1e` FOREIGN KEY (`startStationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_9cfe718b1f69fcda6bf7102243a` FOREIGN KEY (`endStationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_9ae4b85478d3d8adb6e8f6f7172` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_6608766e195dacfe423e74c1ac9` FOREIGN KEY (`bikeId`) REFERENCES `bike`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `article` ADD CONSTRAINT `FK_a9c5f4ec6cceb1604b4a3c84c87` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `article` DROP FOREIGN KEY `FK_a9c5f4ec6cceb1604b4a3c84c87`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_6608766e195dacfe423e74c1ac9`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_9ae4b85478d3d8adb6e8f6f7172`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_9cfe718b1f69fcda6bf7102243a`");
        await queryRunner.query("ALTER TABLE `ride` DROP FOREIGN KEY `FK_cb33e04b103feefa3ef5938ba1e`");
        await queryRunner.query("ALTER TABLE `bike` DROP FOREIGN KEY `FK_434c39c48566ad3de7ec621ca61`");
        await queryRunner.query("ALTER TABLE `bike` DROP FOREIGN KEY `FK_5d42265bfc04e9bc800416ee5b3`");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` DROP FOREIGN KEY `FK_e9179d5c566c85e41cd265cbdd9`");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` DROP FOREIGN KEY `FK_1ae68bf7d756b2d1170a774873a`");
        await queryRunner.query("ALTER TABLE `bike_model` DROP FOREIGN KEY `FK_a6f40f5c24d0100dac3235cce9a`");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` DROP FOREIGN KEY `FK_48161fff9f96d02d2fb5dcabb20`");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` DROP FOREIGN KEY `FK_01cfdb2bcaaccd90dd10e67a58a`");
        await queryRunner.query("ALTER TABLE `station_monitoring` DROP FOREIGN KEY `FK_7dbe51843af72c7a9aa07ccb1fe`");
        await queryRunner.query("ALTER TABLE `issue_thread` DROP FOREIGN KEY `FK_ad292289122f03b3b0dee720ecb`");
        await queryRunner.query("ALTER TABLE `issue_thread` DROP FOREIGN KEY `FK_3d7783301d844fd0662be2e2c12`");
        await queryRunner.query("ALTER TABLE `issue` DROP FOREIGN KEY `FK_c45ed95b87402ee9e4b3c8dc81f`");
        await queryRunner.query("ALTER TABLE `invoice` DROP FOREIGN KEY `FK_1ca5dce89a3293e6b88cd14c0ca`");
        await queryRunner.query("ALTER TABLE `invoice` DROP FOREIGN KEY `FK_f8e849201da83b87f78c7497dde`");
        await queryRunner.query("ALTER TABLE `subscription` DROP FOREIGN KEY `FK_cc906b4bc892b048f1b654d2aa0`");
        await queryRunner.query("ALTER TABLE `subscription` DROP FOREIGN KEY `FK_6b6d0e4dc88105a4a11103dd2cd`");
        await queryRunner.query("ALTER TABLE `session` DROP FOREIGN KEY `FK_3d2f174ef04fb312fdebd0ddc53`");
        await queryRunner.query("ALTER TABLE `article` CHANGE `authorId` `authorId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `article` ADD CONSTRAINT `FK_a9c5f4ec6cceb1604b4a3c84c87` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `user` CHANGE `resetPasswordToken` `resetPasswordToken` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `user` CHANGE `password` `password` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `bikeId` `bikeId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `endStationId` `endStationId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `ride` CHANGE `startStationId` `startStationId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_6608766e195dacfe423e74c1ac9` FOREIGN KEY (`bikeId`) REFERENCES `bike`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_9ae4b85478d3d8adb6e8f6f7172` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_9cfe718b1f69fcda6bf7102243a` FOREIGN KEY (`endStationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `ride` ADD CONSTRAINT `FK_cb33e04b103feefa3ef5938ba1e` FOREIGN KEY (`startStationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `station` CHANGE `coordinateY` `coordinateY` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `station` CHANGE `coordinateX` `coordinateX` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike` CHANGE `modelId` `modelId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `bike` CHANGE `stationId` `stationId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `bike` CHANGE `batteryPercent` `batteryPercent` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike` ADD CONSTRAINT `FK_434c39c48566ad3de7ec621ca61` FOREIGN KEY (`modelId`) REFERENCES `bike_model`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike` ADD CONSTRAINT `FK_5d42265bfc04e9bc800416ee5b3` FOREIGN KEY (`stationId`) REFERENCES `station`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` CHANGE `bikeBreakdownId` `bikeBreakdownId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` ADD CONSTRAINT `FK_e9179d5c566c85e41cd265cbdd9` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike_maintenance_thread` ADD CONSTRAINT `FK_1ae68bf7d756b2d1170a774873a` FOREIGN KEY (`bikeBreakdownId`) REFERENCES `bike`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `bikeManufacturerId` `bikeManufacturerId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `icon` `icon` varchar(255) NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `maxDistance` `maxDistance` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `maxSpeed` `maxSpeed` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `maxPower` `maxPower` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `weight` `weight` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `bike_model` CHANGE `batteryCapacity` `batteryCapacity` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `station_maintenance_thread` CHANGE `stationBreakdownId` `stationBreakdownId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `station_monitoring` CHANGE `stationId` `stationId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `station_monitoring` CHANGE `chargingPower` `chargingPower` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `station_monitoring` CHANGE `batteryPercent` `batteryPercent` double(22) NOT NULL");
        await queryRunner.query("ALTER TABLE `issue_thread` CHANGE `issueId` `issueId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `issue_thread` CHANGE `authorId` `authorId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `issue` CHANGE `creatorId` `creatorId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `invoice` CHANGE `subscriptionId` `subscriptionId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `invoice` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `invoice` CHANGE `amount` `amount` decimal(15,2) NOT NULL DEFAULT '0.00'");
        await queryRunner.query("ALTER TABLE `subscription` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `subscription` CHANGE `planId` `planId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `plan` CHANGE `costPerMinute` `costPerMinute` decimal(15,2) NOT NULL DEFAULT '0.00'");
        await queryRunner.query("ALTER TABLE `plan` CHANGE `price` `price` decimal(15,2) NOT NULL DEFAULT '0.00'");
        await queryRunner.query("ALTER TABLE `session` CHANGE `userId` `userId` int NULL DEFAULT 'NULL'");
        await queryRunner.query("ALTER TABLE `plan` DROP COLUMN `isActive`");
        await queryRunner.query("ALTER TABLE `plan` DROP COLUMN `freeMinutes`");
        await queryRunner.query("ALTER TABLE `plan` ADD `isUnlimited` tinyint NOT NULL DEFAULT '0'");
        await queryRunner.query("CREATE INDEX `FK_48161fff9f96d02d2fb5dcabb20` ON `station_maintenance_thread` (`userId`)");
        await queryRunner.query("CREATE INDEX `FK_01cfdb2bcaaccd90dd10e67a58a` ON `station_maintenance_thread` (`stationBreakdownId`)");
        await queryRunner.query("CREATE INDEX `FK_7dbe51843af72c7a9aa07ccb1fe` ON `station_monitoring` (`stationId`)");
        await queryRunner.query("CREATE INDEX `FK_ad292289122f03b3b0dee720ecb` ON `issue_thread` (`issueId`)");
        await queryRunner.query("CREATE INDEX `FK_3d7783301d844fd0662be2e2c12` ON `issue_thread` (`authorId`)");
        await queryRunner.query("CREATE INDEX `FK_c45ed95b87402ee9e4b3c8dc81f` ON `issue` (`creatorId`)");
        await queryRunner.query("CREATE INDEX `FK_1ca5dce89a3293e6b88cd14c0ca` ON `invoice` (`subscriptionId`)");
        await queryRunner.query("CREATE INDEX `FK_f8e849201da83b87f78c7497dde` ON `invoice` (`userId`)");
        await queryRunner.query("CREATE INDEX `FK_cc906b4bc892b048f1b654d2aa0` ON `subscription` (`userId`)");
        await queryRunner.query("CREATE INDEX `FK_6b6d0e4dc88105a4a11103dd2cd` ON `subscription` (`planId`)");
        await queryRunner.query("CREATE INDEX `FK_3d2f174ef04fb312fdebd0ddc53` ON `session` (`userId`)");
        await queryRunner.query("ALTER TABLE `bike_model` ADD CONSTRAINT `FK_58890ebe484c5170e8cbfec4632` FOREIGN KEY (`bikeManufacturerId`) REFERENCES `bike_manufacturer`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
    }

}
