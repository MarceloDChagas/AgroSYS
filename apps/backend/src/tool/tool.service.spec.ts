import { Test, TestingModule } from '@nestjs/testing';
import { ToolService } from './tool.service';
import {
  TOOL_REPOSITORY,
  IToolRepository,
} from './repositories/tool.repository.interface';
import { CreateToolDto } from '@shared/dto/tool/create-tool.dto';
import { EToolName, EStatusTool } from '@shared/enums/tool.enum';

describe('ToolService', () => {
  let service: ToolService;

  // Mock do repositório
  const mockToolRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    findByStatus: jest.fn(),
    findByToolName: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ToolService,
        {
          provide: TOOL_REPOSITORY,
          useValue: mockToolRepository,
        },
      ],
    }).compile();

    service = module.get<ToolService>(ToolService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deve criar uma ferramenta', async () => {
      const dto: CreateToolDto = {
        toolName: EToolName.ENXADA,
        status: EStatusTool.REQUESTED,
      };

      const expectedResult = {
        id: '1',
        ...dto,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      mockToolRepository.create.mockResolvedValue(expectedResult);

      const result = await service.create(dto);

      expect(result).toEqual(expectedResult);
      expect(mockToolRepository.create).toHaveBeenCalledWith(dto);
    });
  });
});
