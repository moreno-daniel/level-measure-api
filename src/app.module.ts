import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MeasuresController } from './measures/measures.controller';
import { MeasuresService } from './measures/measures.service';
import { MeasuresModule } from './measures/measures.module';

@Module({
  imports: [MeasuresModule],
  controllers: [AppController, MeasuresController],
  providers: [AppService, MeasuresService],
})
export class AppModule {}
