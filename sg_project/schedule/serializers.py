from rest_framework import serializers

from .models import Revision

class RevisionSerializer(serializers.ModelSerializer):
    is_active = serializers.BooleanField(read_only=True)
    # field = serializers.PrimaryKeyRelatedField(read_only=True)

    class Meta:
        model = Revision
        fields = ['date', 'field', 'is_active']