
import {
  env,
  Opine,
} from './deps.ts'
import routesV1 from './app/routes.ts'

const app = Opine.opine()

app.use(Opine.json())

app.use((req, res, next) => {
  console.log('first middleware')
  next()
});

app.use('/api/v1', routesV1)

app.get('/', (req, res) => res.send('Hello Deno.'))

app.use((req, res) => {
  res.setStatus(404).json({
    statusCode: 404,
    message: 'not found.',
  });
})

export default app