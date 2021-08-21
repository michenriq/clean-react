import { SaveAccessToken } from '@/domain/usecases/save-access-token'
import { Validation } from '@/presentation/protocols/validation'

export class SaveAccesstokenMock implements SaveAccessToken {
  accessToken: string

  async save (accessToken: string): Promise<void> {
    this.accessToken = accessToken
  }
}
