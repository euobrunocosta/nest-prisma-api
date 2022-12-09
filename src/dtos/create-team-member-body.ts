import { IsNotEmpty } from 'class-validator';

export class CreateTeamMemberBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty({
    message: 'The function field should not be empty',
  })
  function: string;
}
