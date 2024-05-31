import {
  Body,
  Controller,
  HttpStatus,
  Post,
  UseGuards,
  Request,
  Put,
  Param,
  Delete,
  Get,
  Query,
} from '@nestjs/common';
import { CardsService } from './cards.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Messages } from 'src/messages/messages.enum';
import { AuthGuard } from 'src/auth/auth.guard';
import { ErrorMessages } from 'src/messages/error-messages.enum';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@ApiTags('cards')
@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cards' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination',
  })
  @ApiQuery({
    name: 'stack',
    required: true,
    type: String,
    description: 'StackId',
  })
  @ApiQuery({
    name: 'searchTerm',
    required: false,
    type: String,
    description: 'Search cards by question',
  })
  @ApiQuery({
    name: 'label',
    required: false,
    type: String,
    description: 'Filter cards by label: hard, medium, easy',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'All cards' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  getAllCards(@Query() query: any) {
    return this.cardsService.getAll(query);
  }

  @Get(':cardId')
  @ApiOperation({ summary: 'Get one card' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Card found' })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  getOneCard(@Param('cardId') cardId: string) {
    return this.cardsService.getOne(cardId);
  }

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Add a new card' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: Messages.CardCreated,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: ErrorMessages.BadRequest,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  addCard(@Request() req, @Body() createCardDto: CreateCardDto) {
    return this.cardsService.add(createCardDto, req.user.sub);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Update card' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.CardUpdated,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.CardNotFound,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ErrorMessages.CannotUpdateCard,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  updateCard(
    @Body() updateCardDto: UpdateCardDto,
    @Param('id') cardId: string,
    @Request() req,
  ) {
    return this.cardsService.update(cardId, updateCardDto, req.user.sub);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete card' })
  @UseGuards(AuthGuard)
  @ApiResponse({
    status: HttpStatus.OK,
    description: Messages.CardDeleted,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: ErrorMessages.CardNotFound,
  })
  @ApiResponse({
    status: HttpStatus.FORBIDDEN,
    description: ErrorMessages.CannotDeleteCard,
  })
  @ApiResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: ErrorMessages.InternalServerError,
  })
  deleteCard(@Param('id') cardId: string, @Request() req) {
    return this.cardsService.delete(cardId, req.user.sub);
  }
}
