import { UserCreateCredentialsDto, UserCreateDto, UserCredentialsDto, UserDto } from "@coinverse/common";
import { Country, Currency, CurrencyType, Prisma, User, UserRole } from "@prisma/client";

type UserInclude = User & {role: UserRole, preferredCurrency: Currency & { type: CurrencyType }, country: Country }

export class UserMapper {
    static fromUserToUserDto(user: UserInclude): UserDto {
        const userDto: UserDto = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            emailAddress: user.emailAddress,
            userRole: {
                id: user.role.id,
                name: user.role.name,
                description: user.role.description
            },
            phoneNumber: user.phoneNumber,
            enabled: user.enabled,
            country: {
                id: user.country.id,
                name: user.country.name,
                code: user.country.code,
                phoneCode: user.country.code
            },
            preferredCurrency: {
                id: user.preferredCurrency.id,
                name: user.preferredCurrency.name,
                code: user.preferredCurrency.code,
                description: user.preferredCurrency.description,
                currencyType: {
                    id: user.preferredCurrency.type.id,
                    name: user.preferredCurrency.type.name,
                    description: user.preferredCurrency.type.description
                }
            }
        };

        return userDto;
    }

    static fromUsersToUsersDto(users: UserInclude[]): UserDto[] {
        const usersDto: UserDto[] = [];
        users.forEach(user => usersDto.push(UserMapper.fromUserToUserDto(user)));
        return usersDto;
    }

    static fromUserToUserCredentialsDto(user: UserInclude): UserCredentialsDto {
        const userCredentialsDto: UserCredentialsDto = {
            id: user.id,
            emailAddress: user.emailAddress,
            password: user.password,
            salt: user.salt,
            firstName: user.firstName,
            lastName: user.lastName,
            userRole: {
                id: user.role.id,
                name: user.role.name,
                description: user.role.description
            },
            phoneNumber: user.phoneNumber,
            enabled: user.enabled,
            country: {
                id: user.country.id,
                name: user.country.name,
                code: user.country.code,
                phoneCode: user.country.phoneCode
            },
            preferredCurrency: {
                id: user.preferredCurrency.id,
                code: user.preferredCurrency.code,
                name: user.preferredCurrency.name,
                description: user.preferredCurrency.description,
                currencyType: {
                    id: user.preferredCurrency.type.id,
                    name: user.preferredCurrency.type.name,
                    description: user.preferredCurrency.type.description
                }
            }
        }

        return userCredentialsDto;
    }

    static fromUserCreateCredentiaDtolsToUser(userCreateCredentialsDto: UserCreateCredentialsDto): Prisma.UserCreateInput {
        const user: Prisma.UserCreateInput = {
            firstName: userCreateCredentialsDto.firstName,
            lastName: userCreateCredentialsDto.lastName,
            emailAddress: userCreateCredentialsDto.emailAddress,
            salt: userCreateCredentialsDto.salt,
            password: userCreateCredentialsDto.password,
            phoneNumber: userCreateCredentialsDto.phoneNumber,
            role: {
                connect: {
                    id: userCreateCredentialsDto.roleId
                }
            },
            country: {
                connect: {
                    id: userCreateCredentialsDto.countryId
                }
            },
            preferredCurrency: {
                connect: {
                    id: userCreateCredentialsDto.preferredCurrencyId
                }
            }
        };

        return user;
    }

    static fromUserCredentialsDtoToUserDto(userCredentialsDto: UserCredentialsDto) : UserDto {
        const userDto: UserDto = {
            id: userCredentialsDto.id,
            firstName: userCredentialsDto.firstName,
            lastName: userCredentialsDto.lastName,
            emailAddress: userCredentialsDto.emailAddress,
            userRole: {
                id: userCredentialsDto.userRole.id,
                name: userCredentialsDto.userRole.name,
                description: userCredentialsDto.userRole.description
            },
            phoneNumber: userCredentialsDto.phoneNumber,
            enabled: userCredentialsDto.enabled,
            country: {
                id: userCredentialsDto.country.id,
                name: userCredentialsDto.country.name,
                code: userCredentialsDto.country.code,
                phoneCode: userCredentialsDto.country.code
            },
            preferredCurrency: {
                id: userCredentialsDto.preferredCurrency.id,
                name: userCredentialsDto.preferredCurrency.name,
                code: userCredentialsDto.preferredCurrency.code,
                description: userCredentialsDto.preferredCurrency.description,
                currencyType: {
                    id: userCredentialsDto.preferredCurrency.currencyType.id,
                    name: userCredentialsDto.preferredCurrency.currencyType.name,
                    description: userCredentialsDto.preferredCurrency.currencyType.description
                }
            }
        };

        return userDto;
    }

    static fromUserCreateDtoToUserCredentialsCreateDto(userCreateDto: UserCreateDto, salt: string) : UserCreateCredentialsDto {
        const userCreateCredentialsDto: UserCreateCredentialsDto = {
            password: userCreateDto.password,
            salt: salt,
            firstName: userCreateDto.firstName,
            lastName: userCreateDto.lastName,
            emailAddress: userCreateDto.emailAddress,
            roleId: userCreateDto.roleId,
            phoneNumber: userCreateDto.phoneNumber,
            enabled: userCreateDto.enabled,
            countryId: userCreateDto.countryId,
            preferredCurrencyId: userCreateDto.preferredCurrencyId
        };

        return userCreateCredentialsDto;
    }
}
