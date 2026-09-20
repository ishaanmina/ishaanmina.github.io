"""
Vercel entry point. Vercel runs every file under api/ as a serverless function
and looks for an ASGI object named `app`. The real code lives one level up in
app.py; this file only makes it importable from here.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app import app  # noqa: E402  (import after sys.path tweak is intentional)
