def human_validation():

    print("\nTest the game in the browser.")
    print("When finished type GO or BLOCK")

    decision = input("> ")

    return decision.strip().upper()
