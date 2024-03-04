import {
  Controller,
  Get,
  Post,
  Body,
  HttpStatus,
  HttpException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateCatDto } from './dto/dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }
  @Get(':id')
  // if we used string so they can throw or an exception is thrown before the route handler is called.
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.catsService.findOne(id);
  }
}
