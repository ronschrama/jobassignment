# Test

## Doel

Het doel van deze test is om een beter idee te krijgen van een aantal punten:

- Kennis van React (frameworks)
- Communiceren met API's
- Frontend skills
- Design skills

## Voorbereiding

### Installeer dependencies

```bash
npm install
```

### Start migrations

```bash
npx prisma migrate dev --preview-feature
```

### Genereer ORM

```bash
npx prisma generate
```

### Start server (http://localhost:4000)

```bash
npm start
```

### Frontend starten (http://localhost:3000)

```bash
cd frontend && npm install && npm run dev
```

## Opdracht

De server bevat 2 endpoints

```
GET /users
> Lijst van alle users
```

```
POST /users
> Nieuwe user aanmaken
{
  email
  name
}
```

De opdracht is om de Next.js frontend uit te breiden met een strak design en de mogelijkheid om users toe te voegen en terug te zien.

## Notities

- Alleen functional components zijn toegestaan
- Tools voor forms, components etc mogen vrij worden gekozen
- Type safety d.m.v. TypeScript wordt gewaardeerd!
