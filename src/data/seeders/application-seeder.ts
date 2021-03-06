import { Seeder } from './common/seeder'
import { ArtTypeSeeder } from './art-type-seeder'

export class ApplicationSeeder implements Seeder {

    private seeders: Seeder[] = [
        new ArtTypeSeeder()
    ]

    public seed = (): Promise<any> => {
        this.seeders.forEach(seeder => {
            seeder.seed()
                .then(() => console.log(seeder.getSuccessMessage()))
                .catch(err => console.log(seeder.getErrorMessage(err)))
        })

        return Promise.resolve()
    }

    public getErrorMessage = (err: any): string => {
        return 'Error while running the seeders\n' + err
    }

    public getSuccessMessage = (): string => {
        return 'All seeders are running'
    }

}
