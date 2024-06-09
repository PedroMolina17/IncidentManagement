import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';
import { TypeUsersService } from './type-users.service';
import { CreateTypeUserDto } from './dto/create-type-user.dto';
import { UpdateTypeUserDto } from './dto/update-type-user.dto';

@Controller('type-users')
export class TypeUsersController {
  constructor(private readonly typeUsersService: TypeUsersService) {}

  @Post()
  create(@Body() createTypeUserDto: CreateTypeUserDto) {
    return this.typeUsersService.create(createTypeUserDto);
  }

  @Get()
  findAll() {
    return this.typeUsersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    const typeUser = await this.typeUsersService.findOne(id);
    if (!typeUser) {
      throw new NotFoundException(`TypeUser with id ${id} not found`);
    }
    return typeUser;
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateTypeUserDto,
  ) {
    try {
      const updateTypeUser = await this.typeUsersService.update(id, data);
      if (!updateTypeUser) {
        throw new NotFoundException(`TypeUser with id ${id} not found`);
      }
      return updateTypeUser;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`TypeUser with id ${id} not found`);
      }
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const deleteTypeUser = await this.typeUsersService.remove(id);
      if (!deleteTypeUser) {
        throw new NotFoundException(`TypeUser with id ${id} not found`);
      }
      return deleteTypeUser;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`TypeUser with id ${id} not found`);
      }
      throw error;
    }
  }
}
