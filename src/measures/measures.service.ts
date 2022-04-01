import { Injectable } from '@nestjs/common';
import { CreateMeasureDto } from './dto/create-measure.dto';
import { UpdateMeasureDto } from './dto/update-measure.dto';

@Injectable()
export class MeasuresService {
  async create(createMeasureDto: CreateMeasureDto): Promise<CreateMeasureDto> {
    console.log(createMeasureDto)
    return await createMeasureDto;
  }

  // findAll() {
  //   return `This action returns all measures`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} measure`;
  // }

  // update(id: number, updateMeasureDto: UpdateMeasureDto) {
  //   return `This action updates a #${id} measure`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} measure`;
  // }
}
