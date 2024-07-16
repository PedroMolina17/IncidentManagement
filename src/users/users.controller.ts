import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  ParseIntPipe,
  BadRequestException,
  NotFoundException,
  Query,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserGuard } from 'src/auth/user.guard';
import { CountDto } from './dto/count-user.dto';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('The Email already exists');
      }
      throw error;
    }
  }

  @Get()
  @UseGuards(UserGuard)
  async findAll(@Query() query: any) {
    return await this.usersService.findAll(query);
  }

  @Get('count')
  async countAll(@Query() query: CountDto) {
    return this.usersService.count(query);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const status = await this.usersService.findOne(id);
      if (!status) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return status;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      throw error;
    }
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    try {
      return await this.usersService.update(id, updateUserDto);
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`User with id ${id} not found`);
      } else if (error.code === 'P2002') {
        throw new NotFoundException(`The Email already exists`);
      } else if (error.code === 'P2003') {
        throw new NotFoundException(
          `Type user with id ${updateUserDto.type_user_id} not found`,
        );
      }
      console.log(error);
      throw error;
    }
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const status = await this.usersService.remove(id);
      if (!status) {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      return status;
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundException(`User with id ${id} not found`);
      }
      throw error;
    }
  }
}
