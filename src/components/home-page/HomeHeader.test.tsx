// src/components/home-page/HomeHeader.test.tsx
import { render, screen } from '@testing-library/react'
import HomeHeader from './HomeHeader'

jest.mock('rick_morty_remote/CharacterSearcher', () => {
  return () => (
    <input data-testid="character-searcher" placeholder="Buscar personaje" />
  )
})

describe('HomeHeader Component', () => {
  it('should render the Rick and Morty logo and the CharacterSearcher', () => {
    render(<HomeHeader />)
    expect(screen.getByAltText('rick-morty-logo')).toBeInTheDocument()
    expect(screen.getByTestId('character-searcher')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Buscar personaje')).toBeInTheDocument()
  })
})
