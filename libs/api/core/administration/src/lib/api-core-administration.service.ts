import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { PageRequest, PageResponse, UserMapper } from '@coinverse/api/common';
import { ApiCorePrismaService } from '@coinverse/api/core/prisma';
import { UserCreateCredentialsDto, UserCredentialsDto, UserDto } from '@coinverse/common';
import { Injectable } from '@nestjs/common';

const userInclude = {
    role: true,
    preferredCurrency: { include: { type: true}},
    country: true
};

@Injectable()
export class ApiCoreAdministrationService {
    constructor(private _prisma: ApiCorePrismaService, @InjectMapper() private readonly _mapper: Mapper) {}

    async getUsers(page: PageRequest) : Promise<PageResponse<UserDto>> {
        const total = await this._prisma.user.count();
        const count = await this._prisma.user.count({skip: page.getOffset(), take: page.getlimit()});

        const users = await this._prisma.user.findMany({include: userInclude, skip: page.getOffset(), take: page.getlimit()});
        const data = UserMapper.fromUsersToUsersDto(users);

        return {
            count,
            total,
            data
        }
    }

    async getUserById(id: number): Promise<UserDto> {
        const user = await this._prisma.user.findFirst({ where: { id }, include: userInclude });

        return UserMapper.fromUserToUserDto(user);
    }

    async getUserCredentialsById(id: number) : Promise<UserCredentialsDto> {
        const user = await this._prisma.user.findFirst({ where: { id }, include: userInclude });

        return UserMapper.fromUserToUserCredentialsDto(user);
    }

    async getUserByEmail(emailAddress: string): Promise<UserDto> {
        const user = await this._prisma.user.findFirst({where: { emailAddress }, include: userInclude });
        return UserMapper.fromUserToUserDto(user);
    }

    async getUserCredentialsByEmail(emailAddress: string) : Promise<UserCredentialsDto> {
        const user = await this._prisma.user.findFirst({ where: { emailAddress }, include: userInclude });

        return UserMapper.fromUserToUserCredentialsDto(user);
    }

    async createUser(userCreateDto: UserCreateCredentialsDto): Promise<UserDto> {
        const data = UserMapper.fromUserCreateCredentiaDtolsToUser(userCreateDto);

        const user = await this._prisma.user.create({
            data,
            include: userInclude
        });

        return UserMapper.fromUserToUserDto(user);
    }

    async updateUserById(id: number, updateUserDto: UserCreateCredentialsDto) : Promise<UserDto> {
        const data = UserMapper.fromUserCreateCredentiaDtolsToUser(updateUserDto);

        const user = await this._prisma.user.update({where: { id }, data, include: userInclude });

        return UserMapper.fromUserToUserDto(user);
    }

    async deleteUserById(id: number) : Promise<UserDto> {
        const user = await this._prisma.user.delete({where: { id }, include: userInclude });

        return UserMapper.fromUserToUserDto(user);
    }
}
