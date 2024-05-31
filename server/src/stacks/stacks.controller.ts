import {
  Controller,
  Post,
  Body,
  Request,
  UseGuards,
  HttpStatus,
  Delete,
  Param,
  Put,
  Query,
  Get,
} from '@nestjs/common';
import { StacksService } from './stacks.service';
import { CreateStackDto } from './dto/create-stack.dto';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/auth.guard';
import { ErrorMessages } from 'src/messages/error-messages.enum';
import { Messages } from 'src/messages/messages.enum';
import { UpdateStackDto } from './dto/update-stack.dto';

@ApiTags('stacks')
@Controller('stacks')
export class StacksController {
  constructor(private readonly stacksService: StacksService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Add a new stack' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: Messages.StackCreated,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ErrorMessages.BadRequest,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  addStack(@Request() req, @Body() createStackDto: CreateStackDto) {
    const userId = req.user.sub;
    return this.stacksService.create(userId, createStackDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get all stacks' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'searchTerm',
    required: false,
    type: String,
    description: 'Search stacks by title',
  })
  @ApiQuery({
    name: 'saved',
    required: false,
    type: Boolean,
    description: 'Filter stacks by saved status',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'All stacks' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  getAllStacks(@Query() query: any, @Request() req) {
    return this.stacksService.getAll(query, req.user.sub);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Get one stack' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Stack found' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  getOneStack(@Request() req, @Param('id') stackId: string) {
    return this.stacksService.getOne(req.user.sub, stackId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete stack' })
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.StackDeleted,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.StackNotFound,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ErrorMessages.CannotDeleteStack,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  deleteStack(@Request() req, @Param('id') stackId: string) {
    return this.stacksService.delete(stackId, req.user.sub);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update stack' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.StackUpdated,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.StackNotFound,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ErrorMessages.CannotUpdateStack,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  updateStack(
    @Request() req,
    @Param('id') stackId: string,
    @Body() updateStackDto: UpdateStackDto,
  ) {
    return this.stacksService.update(req.user.sub, stackId, updateStackDto);
  }
}
