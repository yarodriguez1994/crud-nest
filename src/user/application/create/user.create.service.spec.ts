import { Test, TestingModule } from '@nestjs/testing';
import { UserCreateService, UserEntity } from './user.create.service';



describe('UserCreate', () => {
  let userCreateService: UserCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
				UserCreateService,
				{
					provide: 'IUserRepository',
					useValue: {
						save: () => {
							return 
						}
					},
				},
			]
    }).compile();
		
    userCreateService = module.get<UserCreateService>(UserCreateService);
  });

  it('should be save', async () => {

		const firstName = "Willson";
    const lastName = "Arteaga";
    const email = "warteaga@kunturtech.com";
    const username = "warteaga";

    expect(await userCreateService.execute({
			id: 1,
			firstName,
			lastName,
			email,
			username
		})).toBeInstanceOf(UserEntity)

  });
});