import { Global, Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

// Now any module that imports the CatsModule has access to the CatsService and will share the same instance with all other modules that import it as well.

@Global()
//The @Global() decorator makes the module global-scoped. Global modules should be registered only once, generally by the root or core module
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {
  //Dependency injection
  constructor(private catsService: CatsService) {}
}
