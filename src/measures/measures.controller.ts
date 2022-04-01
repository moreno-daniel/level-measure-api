import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { MeasuresService } from './measures.service';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';

@Controller('measures')
export class MeasuresController {
  constructor(private readonly measuresService: MeasuresService) {}

  @Post()
  async create(@Body() createMeasureDto: CreateMeasureDto, @Res() res) {
    let operationMode = await this.measuresService.create(createMeasureDto);
    return res.status(HttpStatus.OK).send("1") 
  }

  // @Get()
  // findAll() {
  //   return this.measuresService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.measuresService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateMeasureDto: UpdateMeasureDto) {
  //   return this.measuresService.update(+id, updateMeasureDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.measuresService.remove(+id);
  // }
}