import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [UsersModule, PostsModule, AuthModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      entities: [],
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'nestjs-blog',
      host: 'localhost',
    }
  )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
