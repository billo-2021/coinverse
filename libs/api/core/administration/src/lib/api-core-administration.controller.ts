import { Body, Controller, Get, Param } from '@nestjs/common';
import { ApiCoreAdministrationService } from './api-core-administration.service';
import { apiRoutesConfig, UserDto } from '@coinverse/common';
import { PageRequest, PageResponse } from '@coinverse/api/common';

@Controller(apiRoutesConfig.administration.url)
export class ApiCoreAdministrationController {
  constructor(
    private apiCoreAdministrationService: ApiCoreAdministrationService
  ) {}

  @Get(apiRoutesConfig.administration.endPoints.users)
  async getUsers(@Param('skip') skip: number, @Param('offset') offset: number) : Promise<PageResponse<UserDto>> {
    const page: PageRequest = new PageRequest(skip, offset);

    const users = await this.apiCoreAdministrationService.getUsers(page);

    return users;
  }
}
